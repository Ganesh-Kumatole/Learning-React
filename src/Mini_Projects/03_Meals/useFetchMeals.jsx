import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMeals = (api_URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!api_URL) {
      setData(null);
      setLoading(false);
      setError(null);
      return;
    }

    let cancelled = false;
    const fetchMeals = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(api_URL);
        if (!cancelled) setData(res.data);
      } catch (err) {
        if (!cancelled) setError(err.message || 'Unknown error');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchMeals();

    return () => {
      cancelled = true;
    };
  }, [api_URL]);

  return { data, loading, error };
};

export default useFetchMeals;
