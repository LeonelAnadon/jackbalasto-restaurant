import { useEffect, useState } from "react";
import { IReviews } from "../interfaces/global";

async function fetchData() {
  const url = "/src/data/dummyReviews.json";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error reading the JSON");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

function useFetchReviews() {
  const [data, setData] = useState<IReviews[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTheData = async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (err) {
        setError(err as Error);
      }
    };
    fetchTheData();
  }, []);

  return { data, error };
}

export default useFetchReviews;
