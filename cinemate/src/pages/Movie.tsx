import Header from '../components/Header/Header';
import MovieList from '../components/MovieList';

import SearchMovies from './SearchMovies';
import { useSearchParams } from 'react-router-dom';

const Movie = () => {
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get('query');
  return (
    <main>
      <Header />

      <div className='p-16'>
        {queryParams ? <SearchMovies /> : <MovieList />}
        {/* <SearchMovies />
        <MovieList /> */}
      </div>
    </main>
  );
};

export default Movie;
