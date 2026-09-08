import { useEffect, useState } from "react";
import { getPortfolio } from "../api/portfolio";

export function usePortfolio(serviceId) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    getPortfolio(serviceId)
      .then((res) => {
        if (cancelled) return;

        // API response:
        // { success: true, count: 13, data: [...] }
        const projects = Array.isArray(res?.data)
          ? res.data
          : [];

        setProjects(projects);
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