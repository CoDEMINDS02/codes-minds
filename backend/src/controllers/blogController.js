import Blog from "../models/Blog.js";

// @route  GET /api/blog
// @access Public (only published) / Private with ?all=true (admin)
export const getBlogs = async (req, res) => {
  try {
    const filter = req.query.all === "true" ? {} : { status: "published" };
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @route  GET /api/blog/:slug
// @access Public
export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog post not found" });
    }
    res.json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @route  POST /api/blog
// @access Private (admin)
export const createBlog = async (req, res) => {
  try {
    const { title, excerpt, content, author, status } = req.body;

    if (!title || !excerpt || !content) {
      return res
        .status(400)
        .json({ success: false, message: "Title, excerpt and content are required" });
    }

    const blog = await Blog.create({
      title,
      excerpt,
      content,
      author,
      status,
      // Cloudinary storage puts the hosted URL in req.file.path
      coverImage: req.file ? req.file.path : "",
    });

    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    console.error("CREATE BLOG ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// @route  PUT /api/blog/:id
// @access Private (admin)
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog post not found" });
    }

    const { title, excerpt, content, author, status } = req.body;

    if (title !== undefined) blog.title = title;
    if (excerpt !== undefined) blog.excerpt = excerpt;
    if (content !== undefined) blog.content = content;
    if (author !== undefined) blog.author = author;
    if (status !== undefined) blog.status = status;

    if (req.file) {
      blog.coverImage = req.file.path;
    }

    await blog.save();
    res.json({ success: true, data: blog });
  } catch (error) {
    console.error("UPDATE BLOG ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// @route  DELETE /api/blog/:id
// @access Private (admin)
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ success: false, message: "Blog post not found" });
    }

    await blog.deleteOne();

    res.json({ success: true, message: "Blog post deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
