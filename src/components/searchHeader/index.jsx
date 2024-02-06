import { useState } from 'react';

const SearchHeader = () => {
  // use state
  // store text inputed in search
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);

  return (
    <div className='relative group flex flex-row gap-x-[10px]'>
      {/* search icon */}
      <div>
        <label htmlFor='header-search-input' className='cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6 fill-custom-black'
          >
            <path
              fillRule='evenodd'
              d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
              clipRule='evenodd'
            />
          </svg>
        </label>
      </div>
      {/* search input */}
      <div className='flex-1'>
        <input
          className='w-full text-sm cursor-pointer text-custom-darkest-gray placeholder:text-custor-darker-gray focus:ring-0 outline-none text-normal'
          id='header-search-input'
          type='text'
          name='header-search-input'
          placeholder='Search for Furs and Tails...'
          onChange={(evt) => setSearchTerm(evt.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchHeader;
