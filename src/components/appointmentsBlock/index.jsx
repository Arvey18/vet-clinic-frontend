import { useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';

// components
import EventBlock from '../eventBlock';
import ScrollBarWrapper from '../scrollbar';

// assets
import AppointmentsImg from '../../assets/images/appointment.png';

const AppointmentsBlock = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  // get current days separately
  // for formating ui
  const currentDay = dayjs(date).format('DD');
  const currentMonth = dayjs(date).format('MMM');
  const currentYear = dayjs(date).format('YYYY');

  // get selected date based on user click
  const handleSelectedDate = (value) => {
    setDate(value);
    setShowCalendar(false);
  };

  return (
    <div className='relative py-5 shadow rounded-xl bg-custom-blue flex flex-col gap-x-4'>
      {/* block header */}
      <div className='relative px-5 text-white flex flex-row items-center font-medium text-lg mb-5'>
        <div className='flex-1'>
          <img src={AppointmentsImg} alt='appointments-img' className='inline w-[30px] align-bottom mr-2' />
          Today Appointments
        </div>
        <div className='relative'>
          <div
            onClick={() => setShowCalendar(!showCalendar)}
            className='border border-white p-2 rounded-full cursor-pointer'
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-5 h-5'>
              <path
                fillRule='evenodd'
                d='M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          {showCalendar && (
            <div className='absolute flex p-4 flex-col right-0 z-10 mt-2 w-[350px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              <Calendar
                value={date}
                onChange={(value) => handleSelectedDate(value)}
                formatShortWeekday={(_locale, date) => dayjs(date).format('dd').charAt(0)}
                formatDay={(_locale, date) => dayjs(date).format('D')}
                className='calendar-header'
              />
            </div>
          )}
        </div>
      </div>
      {/* current date */}
      <div className='relative  px-5 flex flex-row gap-2 mb-4'>
        <div className='text-white font-bold text-[100px] leading-[70px] inline-block'>{currentDay}</div>
        <div>
          <div className='text-white font-light text-[40px] leading-[40px]'>{currentMonth}</div>
          <div className='text-white font-light text-[40px] leading-[40px]'>{currentYear}</div>
        </div>
      </div>
      {/* Appointments lists */}
      <div className='relative h-[421px] '>
        <ScrollBarWrapper>
          <div className='flex px-5 flex-col divide-y divide-white'>
            <EventBlock color='text-white' descriptionColor='text-white' />
            <EventBlock color='text-white' descriptionColor='text-white' />
            <EventBlock color='text-white' descriptionColor='text-white' />
            <EventBlock color='text-white' descriptionColor='text-white' />
            <EventBlock color='text-white' descriptionColor='text-white' />
          </div>
        </ScrollBarWrapper>
      </div>
    </div>
  );
};

export default AppointmentsBlock;
