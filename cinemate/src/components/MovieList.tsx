import MovieCard from './SingleMovie/MovieCard';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import PaginationComponent from './pagination';
import { useEffect, useState } from 'react';

const MovieList = () => {
  const { pathname } = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  const { data: movies } = useFetch(pathname, currentPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [pathname]);

  return (
    <main className='container mx-auto px-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <div className='mt-8 flex justify-center'>
        <PaginationComponent
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div>
    </main>
  );
};

export default MovieList;
