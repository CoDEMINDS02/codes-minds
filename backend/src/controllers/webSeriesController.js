import WebSeries from "../models/WebSeries.js";

function getImageUrls(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.filter(Boolean);

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
  } catch {
    return [];
  }
}

// @route GET /api/web-series
// @access Public
export const getWebSeries = async (req, res) => {
  try {
    const episodes = await WebSeries.find().sort({ order: 1, episodeNumber: 1, createdAt: -1 });

    res.json({
      success: true,
      count: episodes.length,
      data: episodes,
    });
  } catch (error) {
    console.error("GET WEB SERIES ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to load web series",
    });
  }
};

// @route GET /api/web-series/:id
// @access Public
export const getWebSeriesById = async (req, res) => {
  try {
    const episode = await WebSeries.findById(req.params.id);

    if (!episode) {
      return res.status(404).json({ success: false, message: "Episode not found" });
    }

    res.json({ success: true, data: episode });
  } catch (error) {
    console.error("GET WEB SERIES BY ID ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to load episode",
    });
  }
};

// @route POST /api/web-series
// @access Private
export const createWebSeries = async (req, res) => {
  try {
    const { title, description, episodeNumber, order, imageUrls } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: "Title is required" });
    }

    const images = getImageUrls(imageUrls);

    const episode = await WebSeries.create({
      title,
      description: description || "",
      episodeNumber: Number(episodeNumber) || 0,
      order: Number(order) || 0,
      images,
    });

    res.status(201).json({
      success: true,
      message: "Episode created successfully",
      data: episode,
    });
  } catch (error) {
    console.error("CREATE WEB SERIES ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create episode",
    });
  }
};

// @route PUT /api/web-series/:id
// @access Private
export const updateWebSeries = async (req, res) => {
  try {
    const episode = await WebSeries.findById(req.params.id);

    if (!episode) {
      return res.status(404).json({ success: false, message: "Episode not found" });
    }

    const { title, description, episodeNumber, order, imageUrls } = req.body;

    if (title !== undefined) episode.title = title;
    if (description !== undefined) episode.description = description;
    if (episodeNumber !== undefined) episode.episodeNumber = Number(episodeNumber) || 0;
    if (order !== undefined) episode.order = Number(order) || 0;

    const uploadedImages = getImageUrls(imageUrls);
    if (uploadedImages.length > 0) {
      episode.images = uploadedImages;
    }

    await episode.save();

    res.json({
      success: true,
      message: "Episode updated successfully",
      data: episode,
    });
  } catch (error) {
    console.error("UPDATE WEB SERIES ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to update episode",
    });
  }
};

// @route DELETE /api/web-series/:id
// @access Private
export const deleteWebSeries = async (req, res) => {
  try {
    const episode = await WebSeries.findById(req.params.id);

    if (!episode) {
      return res.status(404).json({ success: false, message: "Episode not found" });
    }

    await episode.deleteOne();

    res.json({ success: true, message: "Episode deleted successfully" });
  } catch (error) {
    console.error("DELETE WEB SERIES ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to delete episode",
    });
  }
};
