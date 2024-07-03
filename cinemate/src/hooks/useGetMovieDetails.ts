import { useState, useEffect } from 'react';
import { MovieDetails } from '../type/movie';

const useGetMovieDetails = (
  id: string | undefined
): { data: MovieDetails | null } => {
  const [data, setData] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_TOKEN}`,
              accept: 'application/json',
            },
          }
        );

        const data = await response.json();

        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieDetails();
  }, [id]);

  return { data };
};

export default useGetMovieDetails;
