import { useEffect, useState } from "react";
import { getServices } from "../api/services";
import { mergeServiceContent } from "../data/services";

function extractServices(response) {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.data?.data)) return response.data.data;
  if (Array.isArray(response?.services)) return response.services;
  return [];
}

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getServices()
      .then((response) => {
        if (cancelled) return;

        const servicesData = extractServices(response);
        setServices(mergeServiceContent(servicesData));
      })
      .catch((error) => {
        console.error("Failed to load services:", error);
        if (!cancelled) setServices(mergeServiceContent([]));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { services, loading };
}