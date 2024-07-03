import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import SearchBar from '../SearchBar';

const Header = () => {
  return (
    <Navbar className='bg-[#111827] py-6'>
      <Navbar.Brand as={Link} href='https://flowbite-react.com'>
        <img src={logo} className='mr-3 h-6 sm:h-9' alt='Flowbite React Logo' />
        <span className='self-center whitespace-nowrap text-4xl font-bold text-[#05B4E2]'>
          Cinemate
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <SearchBar />
      </div>

      <Navbar.Collapse>
        <Navbar.Link
          active
          className='text-xl hover:text-black transition duration-300 font-extrabold'>
          <Link to={'/'}>All Movies</Link>
        </Navbar.Link>
        <Navbar.Link className='text-xl  text-white '>
          <Link to={'/movie/popular'}>Popular</Link>
        </Navbar.Link>
        <Navbar.Link className='text-xl text-white'>
          <Link to={'/movie/top-rated'}>Top Rated</Link>
        </Navbar.Link>

        <Navbar.Link className='text-xl  text-white'>
          <Link to={'/movie/upcoming'}>Upcoming</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
