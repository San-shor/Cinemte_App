import { useState, useEffect } from 'react';
import { Movie } from '../type/movie';

const useSearch = (queryTerm: string | null): { data: Movie[] } => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!queryTerm) return;
    const searchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${queryTerm}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_TOKEN}`,
              accept: 'application/json',
            },
          }
        );

        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    searchMovies();
  }, [queryTerm]);

  return { data };
};

export default useSearch;
