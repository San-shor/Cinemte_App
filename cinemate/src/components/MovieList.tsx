import MovieCard from './SingleMovie/MovieCard';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';

const MovieList = () => {
  const { pathname } = useLocation();

  const { data: movies } = useFetch(pathname);
  console.log(movies);

  return (
    <main className='grid grid-cols-2 md:grid-cols-4 gap-y-7 content-between '>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
};

export default MovieList;
