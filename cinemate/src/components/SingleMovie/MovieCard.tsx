import { Card } from 'flowbite-react';
import { Movie } from '../../type/movie';
import { Rating } from 'flowbite-react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }: { movie: Movie }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const totalStars = 10;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Rating.Star key={i} />);
    }

    for (let i = fullStars; i < totalStars; i++) {
      stars.push(<Rating.Star key={i} filled={false} />);
    }

    return stars;
  };

  return (
    <Card
      className='w-full max-w-sm mx-auto'
      imgSrc={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}>
      <a href='#'>
        <h5 className='text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
          {movie.title}
        </h5>
      </a>
      <div className='mb-5 mt-2.5 flex items-center'>
        <Rating>{renderStars(Math.floor(movie.vote_average))}</Rating>
        <span className='ml-3 mr-2 rounded bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800'>
          {Math.floor(movie.vote_average)}
        </span>
      </div>
      <div className='flex  md:flex-row items-center justify-between'>
        <span className='text-normal font-semibold  text-gray-900 dark:text-white mb-2 md:mb-0'>
          {formatDate(movie.release_date)}
        </span>
        <Link
          to={`/movie/${movie.id}`}
          className='rounded-lg px-2 py-2 bg-cyan-700 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'>
          View Details
        </Link>
      </div>
    </Card>
  );
};

export default MovieCard;
