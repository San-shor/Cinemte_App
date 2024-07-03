import { useSearchParams } from 'react-router-dom';
import useSearch from '../hooks/useSearch';
import MovieCard from '../components/SingleMovie/MovieCard';

const SearchMovies = () => {
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get('query');

  const { data: movies } = useSearch(queryParams);
  console.log(movies);

  return (
    <main className='grid grid-cols-2 md:grid-cols-4 gap-7 '>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
};

export default SearchMovies;
