import { useState, useEffect } from 'react';

const useFetchMovies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
          {
            method: 'GET',
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjllYmRkYjNhNTU3MjRjZTNkOWM5ZmNiYjgyYzM3MiIsIm5iZiI6MTcxOTg0OTYzMi43MzI0NTMsInN1YiI6IjY2ODJjNTg0ODg5ZTQwOTUzNDFlNTBjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qrFzQ2kWMp3mpGftYdrHRJ4tlSn2I_KoLJEabENL2UI',
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

    fetchMovies();
  }, []);

  return { data };
};

export default useFetchMovies;
