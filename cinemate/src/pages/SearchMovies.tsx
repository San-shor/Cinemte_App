import { useSearchParams } from 'react-router-dom';
import useSearch from '../hooks/useSearch';
import MovieCard from '../components/SingleMovie/MovieCard';

const SearchMovies = () => {
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get('query');

  const { data: movies } = useSearch(queryParams);
  console.log(movies);

  return (
    <main>
      <section className='py-7'>
        <p className='text-cyan-700 font-semibold text-3xl '>
          {movies.length === 0
            ? `No result found for '${queryParams}'`
            : `Result for '${queryParams}'`}
        </p>
      </section>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-7 '>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

export default SearchMovies;
