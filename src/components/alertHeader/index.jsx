import { useState, useRef, useEffect } from 'react';

// components
import NotificationBlock from '../notificationBlock';
import ScrollbarWrapper from '../scrollbar';

const AlertHeader = () => {
  // use states
  // set alerts counts for unread
  // handling value for display notifications
  const [alertsCounts] = useState(12);
  const [showNotifications, setShowNotifications] = useState(false);

  // handle display of notifications
  const handleClickNotificationBell = () => {
    setShowNotifications(!showNotifications);
  };

  // create ref for wrapper
  // to be used in click outside
  const wrapperRef = useRef(null);

  // close menu when clicking outside
  const handleClickOutside = (e) => {
    if (e.target !== wrapperRef?.current && !wrapperRef?.current?.contains(e.target)) {
      setShowNotifications(false);
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
      <div className='relative cursor-pointer border border-custom-darker-gray rounded-full flex items-center justify-center'>
        {/* alert text */}
        {alertsCounts > 0 ? (
          <>
            <div className='relative pl-4 px-2 pr-2 font-medium text-sm flex text-custom-dark-gray items-center'>
              <p>
                You have <span className='relative inline font-bold text-custom-black'>{alertsCounts}</span> unread
                notifications
              </p>
            </div>
            <div className='w-[1px] h-[30px] bg-custom-darker-gray'></div>
          </>
        ) : null}
        {/* alerts icon */}
        <div className='p-2' onClick={handleClickNotificationBell}>
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
      {/* notification list popup */}
      {showNotifications && (
        <div className='absolute h-[435px] flex flex-col right-0 z-10 mt-2 w-[350px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='divide-y p-4 text-normal font-medium'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-5 h-5 inline mr-1'
            >
              <path d='M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z' />
              <path
                fillRule='evenodd'
                d='M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z'
                clipRule='evenodd'
              />
            </svg>
            Notifications
          </div>
          <div className='flex-1'>
            <ScrollbarWrapper>
              <NotificationBlock />
              <NotificationBlock />
              <NotificationBlock />
              <NotificationBlock />
              <NotificationBlock />
              <NotificationBlock />
              <NotificationBlock />
              <NotificationBlock />
              <NotificationBlock />
              <NotificationBlock />
              <NotificationBlock />
              <NotificationBlock />
            </ScrollbarWrapper>
          </div>
          <div className='flex items-center'>
            <div className='p-4 cursor-pointer relative flex flex-row items-center justify-center text-sm font-medium w-full hover:bg-gray-100'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5 mr-1 fill-custom-black inline'
              >
                <path d='M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z' />
                <path
                  fillRule='evenodd'
                  d='M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z'
                  clipRule='evenodd'
                />
              </svg>
              See All
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertHeader;
