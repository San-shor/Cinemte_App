import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
      reset: Function;
    };
    const queryTerm = target.search.value;

    target.reset();
    return navigate(`/search/movie?query=${queryTerm}`);
  };
  return (
    <form
      className='flex items-center max-w-sm mx-auto'
      onSubmit={handleSubmit}>
      <label className='sr-only'>Search</label>
      <div className=' w-full'>
        <input
          type='text'
          id='simple-search'
          name='search'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Search movie name...'
          required
        />
      </div>
      <button
        type='submit'
        className='p-2.5 ms-2 text-sm font-medium text-white bg-cyan-700 rounded-lg border border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
        <svg
          className='w-4 h-4'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 20 20'>
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
          />
        </svg>
        <span className='sr-only'>Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
