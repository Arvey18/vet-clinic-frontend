import { useState } from 'react';

const AlertHeader = () => {
  const [alertsCounts, setAlertsCounts] = useState(12);

  return (
    <div className='relative cursor-pointer border border-custom-darker-gray rounded-full flex items-center justify-center'>
      {/* alert text */}
      {alertsCounts > 0 ? (
        <>
          <div className='relative pl-4 px-2 pr-2 font-medium text-sm flex text-custom-dark-gray items-center'>
            <p>
              You have <span className='relative inline font-bold text-custom-black'>{alertsCounts}</span> notifications
            </p>
          </div>
          <div className='w-[1px] h-[30px] bg-custom-darker-gray'></div>
        </>
      ) : null}
      {/* alerts icon */}
      <div className='p-2' onClick={() => setAlertsCounts(0)}>
        {alertsCounts > 0 ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5 fill-red-500'
          >
            <path d='M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z' />
            <path
              fillRule='evenodd'
              d='M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z'
              clipRule='evenodd'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5 fill-custom-black'
          >
            <path
              fillRule='evenodd'
              d='M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z'
              clipRule='evenodd'
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default AlertHeader;
