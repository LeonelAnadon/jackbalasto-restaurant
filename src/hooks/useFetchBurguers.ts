import { useEffect, useState } from 'react';
import { IBurger } from '../interfaces/global';

async function fetchData() {
  const url = '/src/data/dummyData.json';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error reading the JSON');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error; 
  }
}

function useFetchBurgerData() {
  const [data, setData] = useState<IBurger[] | null>(null);
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

export default useFetchBurgerData;