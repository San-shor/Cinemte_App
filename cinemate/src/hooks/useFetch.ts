import { useState, useEffect } from 'react';

const useFetch = (pathName) => {
  const [data, setData] = useState([]);
  let url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;

  if (pathName.includes('popular')) {
    url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    console.log('popular');
  } else if (pathName.includes('top-rated')) {
    url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  } else if (pathName.includes('upcoming')) {
    url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjllYmRkYjNhNTU3MjRjZTNkOWM5ZmNiYjgyYzM3MiIsIm5iZiI6MTcxOTg0OTYzMi43MzI0NTMsInN1YiI6IjY2ODJjNTg0ODg5ZTQwOTUzNDFlNTBjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qrFzQ2kWMp3mpGftYdrHRJ4tlSn2I_KoLJEabENL2UI',
            accept: 'application/json',
          },
        });

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
