import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Movie from './pages/Movie';

import MovieDetails from './pages/MovieDetails';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Movie />,
      },
      {
        path: '/movie/popular',
        element: <Movie />,
      },
      {
        path: '/movie/top-rated',
        element: <Movie />,
      },
      {
        path: '/movie/upcoming',
        element: <Movie />,
      },
      {
        path: '/search/movie',
        element: <Movie />,
      },
      {
        path: 'movie/:id',
        element: <MovieDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
