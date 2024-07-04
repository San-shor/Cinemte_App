import { useParams } from 'react-router-dom';
import useGetMovieDetails from '../hooks/useGetMovieDetails';
import { Rating, Badge } from 'flowbite-react';

const MovieDetails = () => {
  const params = useParams();

  const { data: movieDetails } = useGetMovieDetails(params.id);

  return (
    <main className='p-20'>
      <div className='flex flex-col md:flex-row items-center gap-8'>
        <div>
          <figure className='relative cursor-pointer'>
            <img
              className='rounded-lg shadow-lg'
              src={`https://image.tmdb.org/t/p/w500/${movieDetails?.backdrop_path}`}
              alt='image description'
            />
            <figcaption className='absolute bottom-6 left-4 text-lg text-white bg-black bg-opacity-50 rounded-lg px-4 py-2'>
              <p>{movieDetails?.original_title}</p>
            </figcaption>
          </figure>
        </div>
        <div className='max-w-md w-full space-y-4'>
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
            {movieDetails?.title}
          </h2>

          <div className='flex flex-wrap gap-2'>
            {movieDetails?.genres.map((item) => (
              <Badge key={item.id} color='indigo' size='md'>
                {item.name}
              </Badge>
            ))}
          </div>
          <div className='flex items-center space-x-2'>
            <Rating size={'lg'}>
              <Rating.Star />
            </Rating>
            <p className='text-md font-bold text-gray-900 dark:text-white'>
              {movieDetails?.vote_average}
            </p>
          </div>
          <div className='flex flex-wrap gap-2'>
            <Badge color='success' size='md'>
              {movieDetails?.status}
            </Badge>
          </div>
          <p className='text-md text-gray-700 dark:text-gray-300'>
            <strong>Runtime:</strong> {movieDetails?.runtime} minutes
          </p>
          <p className='text-md text-gray-700 dark:text-gray-300'>
            <strong>Release Date:</strong> {movieDetails?.release_date}
          </p>
          <p className='text-md text-gray-700 dark:text-gray-300'>
            <strong>Popularity:</strong> {movieDetails?.popularity}
          </p>
          <div></div>
          <div></div>
        </div>
      </div>
      <span className='flex flex-row gap-4 text-2xl font-bold mt-10'>
        Overview:
        <p className='text-lg text-gray-700 dark:text-gray-200 font-[400]'>
          {movieDetails?.overview}
        </p>
      </span>
      <div className='flex flex-row gap-2 mt-4'>
        <span className='block text-gray-800 dark:text-gray-200 font-semibold'>
          Language:
        </span>
        <div className='flex flex-wrap gap-2'>
          {movieDetails?.spoken_languages.map((item) => (
            <Badge key={item.iso_639_1} color='info' size='md'>
              {item.name}
            </Badge>
          ))}
        </div>
      </div>
      <div className='flex flex-row gap-2 mt-4'>
        <span className='block text-gray-800 dark:text-gray-200 font-semibold'>
          Origin:
        </span>
        <div className='flex flex-wrap gap-2'>
          {movieDetails?.origin_country.map((item) => (
            <Badge key={item} color='info' size='md'>
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
