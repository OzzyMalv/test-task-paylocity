import { useState, useEffect } from "react";
import { mockData, wait } from "@/utils/employees";
import { getRecentFromLocalStorage } from "@/utils/storage";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  // for very first load add some data
  useEffect(() => {
    const storedRecent = localStorage.getItem("recent");
    if (!storedRecent) {
      localStorage.setItem("recent", JSON.stringify(mockData));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        await wait(500);
        // tmp get data from local storage
        const locallySavedData = getRecentFromLocalStorage();
        //
        const response = { data: locallySavedData };
        if (!response) {
          throw new Error(response.statusText);
        }
        setIsPending(false);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(`${error} Could not Fetch Data `);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error, setData, setIsPending };
};
