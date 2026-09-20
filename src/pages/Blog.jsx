import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useBlogs } from "../hooks/useBlog";
import { resolveImage } from "../api/config";
import "./Blog.css";

function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Blog() {
  const { blogs, loading } = useBlogs();

  return (
    <>
      <section className="section blog-hero">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">OUR BLOG</span>
            <h1>
              Ideas, Guides &{" "}
              <span className="gradient-text">Insights</span>
            </h1>
            <p>
              Thoughts on web development, design and everything we learn
              while building digital products.
            </p>
          </div>
        </div>
      </section>

      <section className="section blog-list-section">
        <div className="container">
          {loading && (
            <p style={{ textAlign: "center", color: "var(--color-text-muted)" }}>
              Loading posts...
            </p>
          )}

          {!loading && blogs.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--color-text-muted)" }}>
              No blog posts yet. Check back soon!
            </p>
          )}

          {!loading && blogs.length > 0 && (
            <div className="blog-grid">
              {blogs.map((post) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post._id}
                  className="blog-card"
                >
                  <div className="blog-card__image">
                    {post.coverImage ? (
                      <img
                        src={resolveImage(post.coverImage)}
                        alt={post.title}
                      />
                    ) : (
                      <div className="blog-card__image blog-card__image--placeholder" />
                    )}
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__meta">
                      <span>
                        <Calendar size={13} /> {formatDate(post.createdAt)}
                      </span>
                      <span>
                        <User size={13} /> {post.author}
                      </span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-card__link">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Blog;
