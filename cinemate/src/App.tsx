import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Movie from './pages/Movie';

import SearchMovies from './pages/SearchMovies';

const router = createBrowserRouter([
  {
    path: '/',
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
