import { useState, useEffect } from 'react';
import { Movie } from '../type/movie';

const useFetch = (pathName: string): { data: Movie[] } => {
  const [data, setData] = useState<Movie[]>([]);
  let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${
    import.meta.env.VITE_MOVIE_API_KEY
  }`;

  if (pathName.includes('popular')) {
    url = `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_MOVIE_API_KEY
    }`;
    console.log('popular');
  } else if (pathName.includes('top-rated')) {
    url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${
      import.meta.env.VITE_MOVIE_API_KEY
    }`;
  } else if (pathName.includes('upcoming')) {
    url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${
      import.meta.env.VITE_MOVIE_API_KEY
    }`;
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
  }, [pathName]);

  return { data };
};

export default useFetch;
