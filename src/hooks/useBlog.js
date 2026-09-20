import { useEffect, useState } from "react";
import { getBlogs, getBlogBySlug } from "../api/blog";

function extractBlogs(response) {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.data)) return response.data;
  return [];
}

// List hook — used on the public Blog listing page
export function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getBlogs()
      .then((response) => {
        if (cancelled) return;
        setBlogs(extractBlogs(response));
      })
      .catch((error) => {
        console.error("Failed to load blog posts:", error);
        if (!cancelled) setBlogs([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { blogs, loading };
}

// Single-post hook — used on the Blog detail page
export function useBlogPost(slug) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setLoading(true);
    setNotFound(false);

    getBlogBySlug(slug)
      .then((response) => {
        if (cancelled) return;
        setPost(response?.data || null);
      })
      .catch((error) => {
        console.error("Failed to load blog post:", error);
        if (!cancelled) setNotFound(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { post, loading, notFound };
}
