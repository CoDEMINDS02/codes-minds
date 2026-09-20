import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useBlogPost } from "../hooks/useBlog";
import { resolveImage } from "../api/config";
import "./BlogDetail.css";

function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogDetail() {
  const { slug } = useParams();
  const { post, loading, notFound } = useBlogPost(slug);

  if (loading) {
    return (
      <section className="section">
        <div className="container">
          <p style={{ textAlign: "center", color: "var(--color-text-muted)" }}>
            Loading post...
          </p>
        </div>
      </section>
    );
  }

  if (notFound || !post) {
    return (
      <section className="section">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Post Not Found</h2>
          <p style={{ color: "var(--color-text-muted)", marginBottom: 24 }}>
            The blog post you're looking for doesn't exist or was removed.
          </p>
          <Link to="/blog" className="btn btn--outline">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section blog-detail">
      <div className="container blog-detail__container">
        <Link to="/blog" className="blog-detail__back">
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        <div className="blog-detail__meta">
          <span>
            <Calendar size={14} /> {formatDate(post.createdAt)}
          </span>
          <span>
            <User size={14} /> {post.author}
          </span>
        </div>

        <h1>{post.title}</h1>

        {post.coverImage && (
          <div className="blog-detail__cover">
            <img src={resolveImage(post.coverImage)} alt={post.title} />
          </div>
        )}

        <div className="blog-detail__content">
          {post.content.split("\n").map((paragraph, i) =>
            paragraph.trim() ? <p key={i}>{paragraph}</p> : null
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogDetail;
