import { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';

import './style.scss';

// components
import ScrollBarWrapper from '../scrollbar';
import EventBlock from '../eventBlock';

const CalendarHeader = () => {
  // use states
  // handling current dates
  // handling show of calendar popup
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date());

  // handle opening of calendar popup
  // set back to current date if closed
  const handleOpeningOfCalendar = () => {
    if (showCalendar) {
      setCalendarDate(new Date());
    }
    setShowCalendar(!showCalendar);
  };

  // get selected date based on user click
  const handleSelectedDate = (value) => {
    setCalendarDate(value);
  };

  // create ref for wrapper
  // to be used in click outside
  const wrapperRef = useRef(null);

  // close menu when clicking outside
  const handleClickOutside = (e) => {
    if (e.target !== wrapperRef?.current && !wrapperRef?.current?.contains(e.target)) {
      setCalendarDate(new Date());
      setShowCalendar(false);
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
      {/* calendar icon for clicking to display calendar popup */}
      <div
        onClick={handleOpeningOfCalendar}
        className='relative cursor-pointer border border-custom-darker-gray rounded-full flex items-center justify-center'
      >
        <div className='p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-5 h-5 fill-custom-black'
          >
            <path d='M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z' />
            <path
              fillRule='evenodd'
              d='M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
      {/* calendar popup */}
      {showCalendar && (
        <div className='absolute flex flex-col right-0 z-10 mt-2 w-[350px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          {/* react-calendar ui
					override style in style.scss */}
          <div className='px-1 py-4'>
            <Calendar
              value={calendarDate}
              onChange={(value) => handleSelectedDate(value)}
              formatShortWeekday={(_locale, date) => dayjs(date).format('dd').charAt(0)}
              formatDay={(_locale, date) => dayjs(date).format('D')}
              className='calendar-header'
            />
          </div>
          {/* scheduled  event per date selected, if theres any */}
          <div className='relative h-[300px]'>
            <ScrollBarWrapper>
              <div className='flex flex-col'>
                <EventBlock />
                <EventBlock />
                <EventBlock />
              </div>
            </ScrollBarWrapper>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarHeader;
