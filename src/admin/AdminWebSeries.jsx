import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import {
  getWebSeries,
  createWebSeries,
  updateWebSeries,
  deleteWebSeries,
} from "../api/webSeries";
import { resolveImage } from "../api/config";
import { uploadToCloudinary } from "../api/uploads";
import "./admin.css";

const MIN_IMAGES = 12;

const emptyForm = {
  title: "",
  description: "",
  episodeNumber: 0,
  order: 0,
};

function AdminWebSeries() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFiles, setImageFiles] = useState([]);
  const [saving, setSaving] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("");
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);

    getWebSeries()
      .then((res) => setEpisodes(res.data || []))
      .catch((err) => {
        console.error("Failed to load web series:", err);
        setError("Failed to load web series data");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setImageFiles([]);
    setError("");
    setModalOpen(true);
  };

  const openEdit = (episode) => {
    setEditing(episode);

    setForm({
      title: episode.title || "",
      description: episode.description || "",
      episodeNumber: episode.episodeNumber ?? 0,
      order: episode.order ?? 0,
    });

    setImageFiles([]);
    setError("");
    setModalOpen(true);
  };

  const closeModal = () => {
    if (saving) return;

    setModalOpen(false);
    setEditing(null);
    setImageFiles([]);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    if (!form.title.trim()) {
      setError("Title is required");
      setSaving(false);
      return;
    }

    // Total images that will exist once saved: newly picked files, or,
    // if none picked while editing, whatever images are already there.
    const existingCount = editing?.images?.length || 0;
    const totalImages = imageFiles.length > 0 ? imageFiles.length : existingCount;

    if (totalImages < MIN_IMAGES) {
      setError(
        `Please add at least ${MIN_IMAGES} images (currently ${totalImages}).`
      );
      setSaving(false);
      return;
    }

    try {
      const payload = {
        title: form.title.trim(),
        description: form.description.trim(),
        episodeNumber: Number(form.episodeNumber) || 0,
        order: Number(form.order) || 0,
      };

      if (imageFiles.length > 0) {
        const uploaded = [];
        for (let i = 0; i < imageFiles.length; i++) {
          setUploadProgress(`Uploading image ${i + 1} of ${imageFiles.length}...`);
          const url = await uploadToCloudinary(imageFiles[i], "image");
          uploaded.push(url);
        }
        payload.imageUrls = uploaded;
      }

      setUploadProgress("");

      if (editing) {
        await updateWebSeries(editing._id, payload);
      } else {
        await createWebSeries(payload);
      }

      closeModal();
      load();
    } catch (err) {
      console.error("Web series save error:", err);
      setError(err?.message || "Failed to save episode");
    } finally {
      setSaving(false);
      setUploadProgress("");
    }
  };

  const handleDelete = async (episode) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${episode.title}"?`
    );

    if (!confirmed) return;

    try {
      await deleteWebSeries(episode._id);
      load();
    } catch (err) {
      console.error("Delete error:", err);
      alert(err?.message || "Failed to delete episode");
    }
  };

  return (
    <>
      <div className="admin-header">
        <div>
          <h1>Web Series</h1>
          <p>Manage episode slides and images for your web series.</p>
        </div>

        <button className="admin-add-btn" onClick={openCreate}>
          <Plus size={16} />
          Add Episode
        </button>
      </div>

      <div className="admin-table-wrap">
        {loading ? (
          <div className="admin-empty">Loading...</div>
        ) : episodes.length === 0 ? (
          <div className="admin-empty">No episodes yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Episode #</th>
                <th>Images</th>
                <th>Order</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {episodes.map((episode) => (
                <tr key={episode._id}>
                  <td>
                    {episode.images?.[0] ? (
                      <img
                        className="admin-table__thumb"
                        src={resolveImage(episode.images[0])}
                        alt={episode.title}
                      />
                    ) : (
                      <div className="admin-table__thumb" />
                    )}
                  </td>

                  <td>{episode.title}</td>
                  <td>{episode.episodeNumber || "-"}</td>
                  <td>{episode.images?.length || 0}</td>
                  <td>{episode.order}</td>

                  <td>
                    <div className="admin-table__actions">
                      <button
                        className="admin-icon-btn"
                        onClick={() => openEdit(episode)}
                        title="Edit Episode"
                      >
                        <Pencil size={15} />
                      </button>

                      <button
                        className="admin-icon-btn admin-icon-btn--danger"
                        onClick={() => handleDelete(episode)}
                        title="Delete Episode"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {modalOpen && (
        <div className="admin-modal-overlay" onClick={closeModal}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <div className="admin-modal__header">
              <h3>{editing ? "Edit Episode" : "Add Episode"}</h3>

              <button
                className="admin-modal__close"
                onClick={closeModal}
                disabled={saving}
              >
                <X size={20} />
              </button>
            </div>

            <form className="admin-form" onSubmit={handleSubmit}>
              <div>
                <label>Title</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>

              <div>
                <label>Description (optional)</label>
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>

              <div className="admin-form__row">
                <div>
                  <label>Episode Number</label>
                  <input
                    type="number"
                    value={form.episodeNumber}
                    onChange={(e) =>
                      setForm({ ...form, episodeNumber: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label>Order</label>
                  <input
                    type="number"
                    value={form.order}
                    onChange={(e) => setForm({ ...form, order: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label>Images (minimum {MIN_IMAGES})</label>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) =>
                    setImageFiles(Array.from(e.target.files || []))
                  }
                />

                {editing && (
                  <p className="admin-form__hint">
                    Select new images only if you want to replace all
                    existing images for this episode.
                  </p>
                )}

                {imageFiles.length > 0 && (
                  <p className="admin-form__hint">
                    {imageFiles.length} new image
                    {imageFiles.length > 1 ? "s" : ""} selected
                    {imageFiles.length < MIN_IMAGES
                      ? ` — need at least ${MIN_IMAGES}.`
                      : "."}
                  </p>
                )}

                {editing?.images?.length > 0 && imageFiles.length === 0 && (
                  <div className="admin-form__preview-row">
                    {editing.images.map((img, index) => (
                      <img
                        key={index}
                        className="admin-form__preview"
                        src={resolveImage(img)}
                        alt={`Slide ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {uploadProgress && (
                <p className="admin-form__hint">{uploadProgress}</p>
              )}

              {error && <p className="admin-form__error">{error}</p>}

              <div className="admin-form__actions">
                <button
                  type="button"
                  className="admin-btn-secondary"
                  onClick={closeModal}
                  disabled={saving}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={saving}
                >
                  {saving
                    ? "Saving..."
                    : editing
                    ? "Update Episode"
                    : "Save Episode"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminWebSeries;
