import axios from "axios";
import { useEffect, useState } from "react";

const useSearchGoogleBooks = (searchTerm,maxResults = 5 ) => {
  const [books, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const abortController = new AbortController();
      try {
        if (searchTerm !== "") {
          
        //params
        const params = {
          q: searchTerm,
          maxResults: maxResults,
          key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
        };

        //request
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes",
          {
            params,
            signal: abortController.signal,
          }
        );

        setBook(response.data);
        setLoading(false);
        } else if(searchTerm === ""){
          throw new Error('Please provide a search term!');
        }
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
  }, [searchTerm]);

  return {books, loading, error}
};

export default useSearchGoogleBooks;
