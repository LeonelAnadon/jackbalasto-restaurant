import { useEffect, useState } from "react";
import { IAbout } from "../interfaces/global";

async function fetchData() {
  const url = "/src/data/dummyAbout.json";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Error reading the JSON");
  }
  const data = (await response.json()) as IAbout;
  return data;
}

function useFetchAbout() {
  const [data, setData] = useState<IAbout | null>(null);
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
    fetchTheData().catch((err) => {
      setError(err as Error);
    });
  }, []);

  return { data, error };
}

export default useFetchAbout;
