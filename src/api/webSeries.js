import http from "./http";

export const getWebSeries = () => http.get("/web-series");

export const getWebSeriesById = (id) => http.get(`/web-series/${id}`);

export const createWebSeries = (payload) =>
  http.post("/web-series", payload, { auth: true });

export const updateWebSeries = (id, payload) =>
  http.put(`/web-series/${id}`, payload, { auth: true });

export const deleteWebSeries = (id) =>
  http.del(`/web-series/${id}`, { auth: true });
