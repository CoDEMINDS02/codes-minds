import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String, // path like /uploads/xyz.jpg
      default: "",
    },
    author: {
      type: String,
      default: "CØDES-MINDS Team",
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "published",
    },
  },
  { timestamps: true }
);

// Auto-generate slug from title whenever title changes
blogSchema.pre("validate", function (next) {
  if (this.title && (this.isModified("title") || !this.slug)) {
    this.slug = this.title
      .toString()
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
  next();
});

export default mongoose.model("Blog", blogSchema);
