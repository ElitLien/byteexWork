import { useState, useEffect } from "react";
import { strapiGet } from "../api/strapi";

const cache = new Map();

function fetchStrapi(endpoint) {
  if (!cache.has(endpoint)) {
    const promise = strapiGet(endpoint).catch((error) => {
      cache.delete(endpoint);
      throw error;
    });
    cache.set(endpoint, promise);
  }
  return cache.get(endpoint);
}

export function useStrapi(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setLoading(true);

    fetchStrapi(endpoint)
      .then((d) => {
        if (active) {
          setData(d);
          setError(null);
        }
      })
      .catch((e) => {
        if (active) setError(e);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [endpoint]);

  return { data, loading, error };
}
