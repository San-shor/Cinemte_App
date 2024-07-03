import { Card } from 'flowbite-react';
import { Movie } from '../../type/movie';
import { Rating } from 'flowbite-react';

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Card
      className='max-w-sm'
      imgSrc={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}>
      <a href='#'>
        <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          {movie.title}
        </h5>
      </a>
      <div className='mb-5 mt-2.5 flex items-center'>
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
        </Rating>
        <span className='ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800'>
          5.0
        </span>
      </div>
      <div className='flex items-center justify-between'>
        <span className='text-normal  text-gray-900 dark:text-white'>
          {movie.release_date}
        </span>
        <a
          href='#'
          className='rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>
          View Details
        </a>
      </div>
    </Card>
  );
};

export default MovieCard;
