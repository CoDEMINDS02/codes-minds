import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../api/blog";
import { resolveImage } from "../api/config";
import "./admin.css";

const emptyForm = {
  title: "",
  excerpt: "",
  content: "",
  author: "CØDES-MINDS Team",
  status: "published",
};

function AdminBlog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    getBlogs(true)
      .then((res) => setBlogs(res.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const openCreate = () => {
    setEditing(null);
    setForm(emptyForm);
    setImageFile(null);
    setError("");
    setModalOpen(true);
  };

  const openEdit = (post) => {
    setEditing(post);
    setForm({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      author: post.author || "CØDES-MINDS Team",
      status: post.status || "published",
    });
    setImageFile(null);
    setError("");
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("excerpt", form.excerpt);
    fd.append("content", form.content);
    fd.append("author", form.author);
    fd.append("status", form.status);
    if (imageFile) fd.append("coverImage", imageFile);

    try {
      if (editing) {
        await updateBlog(editing._id, fd);
      } else {
        await createBlog(fd);
      }
      setModalOpen(false);
      load();
    } catch (err) {
      setError(err.message || "Failed to save blog post");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (post) => {
    if (!window.confirm(`Delete "${post.title}"?`)) return;
    try {
      await deleteBlog(post._id);
      load();
    } catch (err) {
      alert(err.message || "Failed to delete blog post");
    }
  };

  return (
    <>
      <div className="admin-header">
        <div>
          <h1>Blog</h1>
          <p>Manage the blog posts shown on your site.</p>
        </div>
        <button className="admin-add-btn" onClick={openCreate}>
          <Plus size={16} /> Add Post
        </button>
      </div>

      <div className="admin-table-wrap">
        {loading ? (
          <div className="admin-empty">Loading...</div>
        ) : blogs.length === 0 ? (
          <div className="admin-empty">No blog posts yet.</div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((post) => (
                <tr key={post._id}>
                  <td>
                    {post.coverImage ? (
                      <img
                        className="admin-table__thumb"
                        src={resolveImage(post.coverImage)}
                        alt={post.title}
                      />
                    ) : (
                      <div className="admin-table__thumb" />
                    )}
                  </td>
                  <td>{post.title}</td>
                  <td>{post.author}</td>
                  <td>
                    {post.status === "draft" ? "Draft" : "Published"}
                  </td>
                  <td>
                    <div className="admin-table__actions">
                      <button className="admin-icon-btn" onClick={() => openEdit(post)}>
                        <Pencil size={15} />
                      </button>
                      <button
                        className="admin-icon-btn admin-icon-btn--danger"
                        onClick={() => handleDelete(post)}
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
              <h3>{editing ? "Edit Post" : "Add Post"}</h3>
              <button className="admin-modal__close" onClick={closeModal}>
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
                <label>Excerpt (short summary shown on the listing card)</label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  rows={2}
                  required
                />
              </div>
              <div>
                <label>Content (use a blank line to start a new paragraph)</label>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  rows={8}
                  required
                />
              </div>
              <div className="admin-form__row">
                <div>
                  <label>Author</label>
                  <input
                    type="text"
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                  />
                </div>
                <div>
                  <label>Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Cover Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImageFile(e.target.files[0])}
                />
                {editing?.coverImage && !imageFile && (
                  <img
                    className="admin-form__preview"
                    src={resolveImage(editing.coverImage)}
                    alt=""
                  />
                )}
              </div>

              {error && <p className="admin-form__error">{error}</p>}

              <div className="admin-form__actions">
                <button type="button" className="admin-btn-secondary" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn--primary" disabled={saving}>
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminBlog;
