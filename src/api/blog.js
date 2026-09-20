import http from "./http";

export const getBlogs = (all = false) =>
  http.get(all ? "/blog?all=true" : "/blog", all ? { auth: true } : undefined);

export const getBlogBySlug = (slug) => http.get(`/blog/${slug}`);

export const createBlog = (formData) =>
  http.post("/blog", formData, { isForm: true, auth: true });

export const updateBlog = (id, formData) =>
  http.put(`/blog/${id}`, formData, { isForm: true, auth: true });

export const deleteBlog = (id) => http.del(`/blog/${id}`, { auth: true });
