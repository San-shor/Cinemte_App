import { useState, useEffect } from 'react';
import { Movie } from '../type/movie';

const useFetch = (pathName: string, queryParams: number): { data: Movie[] } => {
  const [data, setData] = useState<Movie[]>([]);
  let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${
    import.meta.env.VITE_MOVIE_API_KEY
  }&page=${queryParams}`;

  if (pathName.includes('popular')) {
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_MOVIE_API_KEY
    }&page=${queryParams}`;
  } else if (pathName.includes('top-rated')) {
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${
      import.meta.env.VITE_MOVIE_API_KEY
    }&page=${queryParams}`;
  } else if (pathName.includes('upcoming')) {
    url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${
      import.meta.env.VITE_MOVIE_API_KEY
    }&page=${queryParams}`;
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url);

        const data = await response.json();
        setData(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [pathName, queryParams]);

  return { data };
};

export default useFetch;
