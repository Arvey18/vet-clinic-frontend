import { useState, useEffect, useRef } from 'react';

// constants
import patientStatus from '../../../constants/patientStatus';

const DropdownV1 = () => {
  // store opening of menu
  const [openMenu, setOpenMenu] = useState(false);
  const [value, setValue] = useState('in-work');

  // create ref for wrapper
  // to be used in click outside
  const wrapperRef = useRef(null);

  // close menu when clicking outside
  const handleClickOutside = (e) => {
    if (e.target !== wrapperRef?.current && !wrapperRef?.current?.contains(e.target)) {
      setOpenMenu(false);
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

  // handle change value
  const handleChangeValue = (value) => {
    setValue(value);
    setOpenMenu(false);
  };

  return (
    <div ref={wrapperRef} className='relative inline-block'>
      {/* selected value */}
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className={`relative inline-flex items-center font-medium text-${patientStatus[value].fillColor} rounded-full min-w-[140px] w-auto cursor-pointer justify-center ${patientStatus[value].bgColor} text-xs px-4 py-3`}
      >
        {patientStatus[value].value}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className={`w-4 h-4 fill-${patientStatus[value].fillColor} inline ml-1`}
        >
          <path
            fillRule='evenodd'
            d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      {openMenu && (
        <div className='absolute right-0 z-10 w-[100%] mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div
            onClick={() => handleChangeValue('in-work')}
            className='text-custom-light-green px-4 py-2 text-sm text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
          >
            In Work
          </div>
          <div
            onClick={() => handleChangeValue('completed')}
            className='text-custom-blue px-4 py-2 text-sm text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
          >
            Completed
          </div>
          <div
            onClick={() => handleChangeValue('canceled')}
            className='text-red-600 px-4 py-2 text-sm text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
          >
            Canceled
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownV1;
