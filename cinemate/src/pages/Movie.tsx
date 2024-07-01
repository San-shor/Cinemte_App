import { useState } from 'react';
import Header from '../components/Header/Header';
import MovieList from '../components/MovieList';
const Movie = () => {
  return (
    <main>
      <Header />
      <MovieList />
    </main>
  );
};

export default Movie;
