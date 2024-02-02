import { useEffect, useState, useRef } from 'react';

// assets
import Avatar1 from '../../assets/images/avatar1.png';

const AvatarHeader = () => {
  // states
  const [showMenu, setShowMenu] = useState(false);

  // create ref for wrapper
  // to be used in click outside
  const wrapperRef = useRef(null);

  // close menu when clicking outside
  const handleClickOutside = (e) => {
    if (e.target !== wrapperRef?.current && !wrapperRef?.current?.contains(e.target)) {
      setShowMenu(false);
    }
  };

  // initiate binding of mousedown for
  // detection of clicking outside element
  useEffect(() => {
    // Bind the event listener of mouse down
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener of mouse down on clean up
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className='relative'>
      {/* avatar details */}
      <div
        className='cursor-pointer relative group flex flex-row gap-x-[10px] items-center'
        onClick={() => setShowMenu(!showMenu)}
      >
        {/* avatar image */}
        <div>
          <img src={Avatar1} alt='user avatar' className='w-[40px]' />
        </div>
        {/* user details name and occupation */}
        <div>
          <div className='text-sm font-medium'>John Doe Siegel</div>
          <div className='text-xs text-custom-dark-gray'>Doctor</div>
        </div>
        {/* chevron icon */}
        <div className='ml-[5px]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className={`w-4 h-4 ${showMenu ? 'rotate-180' : 'rotate-0'}  fill-custom-darkest-gray`}
          >
            <path
              fillRule='evenodd'
              d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
      {/* avatar menu */}
      {showMenu && (
        <div className='absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
            <div className='text-sm'>
              <div>Signed in as:</div>
              <div className='font-medium truncate'>johndoesiegel@gmail.com</div>
            </div>
          </div>
          <div className='py-2 text-sm text-gray-700 dark:text-gray-200'>
            <div className='flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5 inline mr-[10px] fill-custom-black'
              >
                <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
                <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
              </svg>
              Dashboard
            </div>
            <div className='cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5 inline mr-[10px] fill-custom-black'
              >
                <path
                  fillRule='evenodd'
                  d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                  clipRule='evenodd'
                />
              </svg>
              Profile
            </div>
            <div className='cursor-pointer flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5 inline mr-[10px] fill-custom-black'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z'
                  clipRule='evenodd'
                />
              </svg>
              Support
            </div>
          </div>
          <div className='py-1'>
            <div className='cursor-pointer flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5 inline mr-[10px] fill-custom-black'
              >
                <path
                  fillRule='evenodd'
                  d='M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z'
                  clipRule='evenodd'
                />
              </svg>
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvatarHeader;
