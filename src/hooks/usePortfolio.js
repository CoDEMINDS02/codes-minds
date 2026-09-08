import { useEffect, useState } from "react";
import { getPortfolio } from "../api/portfolio";

function extractProjects(response) {
  const candidates = [
    response?.data,
    response?.data?.data,
    response?.data?.projects,
    response?.projects,
  ];

  for (const candidate of candidates) {
    if (Array.isArray(candidate)) return candidate;
  }

  if (Array.isArray(response)) return response;

  return [];
}

export function usePortfolio(serviceId) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    getPortfolio(serviceId)
      .then((response) => {
        if (cancelled) return;

        const nextProjects = extractProjects(response).map((project) => ({
          ...project,
          _id: project?._id || project?.id,
          images: Array.isArray(project?.images)
            ? project.images.filter(Boolean)
            : [],
          video:
            typeof project?.video === "string"
              ? project.video.trim()
              : "",
        }));

        console.log("Portfolio API response:", response);
        console.log(
          "Portfolio projects:",
          nextProjects.length,
          nextProjects
        );

        setProjects(nextProjects);
      })
      .catch((error) => {
        console.error("Failed to load portfolio:", error);

        if (!cancelled) {
          setProjects([]);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [serviceId]);

  return { projects, loading };
}