import MovieList from '../components/MovieList';

import SearchMovies from './SearchMovies';
import { useSearchParams } from 'react-router-dom';

const Movie = () => {
  const [searchParams] = useSearchParams();
  const queryParams = searchParams.get('query');
  return (
    <div className='p-20'>{queryParams ? <SearchMovies /> : <MovieList />}</div>
  );
};

export default Movie;
