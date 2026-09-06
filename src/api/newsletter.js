import http from "./http";

export const subscribeNewsletter = (email) =>
  http.post("/newsletter", { email });
