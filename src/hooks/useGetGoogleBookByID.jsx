import axios from "axios";
import { useEffect, useState } from "react";

const useGetGoogleBookByID = ( bookId ) => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const abortController = new AbortController();
      try {
        //params
        const params = {
          key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
        };

        //request
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`,
          {
            params,
            signal: abortController.signal,
          }
        );

        setBook(response.data);
        setLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(error);
          setLoading(false);
        }
      }

      //Clean up function
      return () => {
        abortController.abort();
      };
    };

    fetchData();
  }, [bookId]);

  return { book, loading, error };
};

export default useGetGoogleBookByID;
