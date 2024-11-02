import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

// assets
import Clock from '../../assets/images/clock.png';

// utils
import isEmpty from '../../utils/isEmpty';

const TimeTrackerBlock = () => {
  // store current date
  const date = new Date();
  const [timeIn] = useState('Thu Feb 08 2024 07:48:49 GMT+0800 (Philippine Standard Time)');
  const [timeOut] = useState('');
  const [renderedHours, setRenderedHours] = useState('');

  useEffect(() => {
    let timer = null;
    if (!isEmpty(timeIn)) {
      const date1 = dayjs(timeIn);
      let diff = null;
      timer = setInterval(() => {
        const date2 = dayjs(new Date());
        diff = date2.diff(date1, 'h');
        setRenderedHours(diff);
      }, 1000);
    }
    return () => {
      if (timer !== null) {
        clearInterval(timer);
      }
    };
  }, [timeIn]);

  return (
    <div className='relative p-5 shadow rounded-xl bg-white flex flex-col gap-x-4'>
      {/* time tracker header */}
      <div className='font-medium text-lg flex flex-row items-center mb-4'>
        <div className='flex-1'>
          <img src={Clock} alt='clock-img' className='w-[30px] inline align-bottom mr-2' />
          Time Tracker
        </div>
        <div>
          {isEmpty(timeIn) ? (
            <div className='cursor-pointer text-white bg-custom-light-green p-2 shadow hover:bg-custom-light-green-darker rounded-md text-sm py-1 px-3'>
              Time in
            </div>
          ) : (
            <div className='cursor-pointer text-white bg-red-400 p-2 shadow hover:bg-red-500 rounded-md text-sm py-1 px-3'>
              Time out
            </div>
          )}
        </div>
      </div>
      {/* time tracker description */}
      <div className='text-sm mb-4'>
        <p className='text-custom-dark-gray'>
          Hi <span className='font-bold text-custom-black'>John Doe</span>, your clock-in/clock-out will be shown here.
          Current Date is: <span className='font-medium text-custom-black'>{dayjs(date).format('MMM DD, YYYY')}</span>.
        </p>
      </div>

      {/* clockin clockout details */}
      <div className='text-custom-light-green text-sm mb-1'>
        <p>
          Time in: <span className='font-bold text-custom-black'>{dayjs(timeIn).format('hh:mm:ss A')}</span>
        </p>
      </div>
      <div className='text-red-500 text-sm mb-1'>
        <p>
          Time out: <span className='font-bold text-custom-black'>{timeOut}</span>
        </p>
      </div>
      <div className='text-custom-black font-semibold text-sm'>
        <p>
          Rendered Hours: <span className='font-bold text-custom-black'>{renderedHours} hours</span>
        </p>
      </div>
      <div className='mt-10 text-red-500 italic text-sm'>* You haven&apos;t time out yet!</div>
    </div>
  );
};

export default TimeTrackerBlock;
