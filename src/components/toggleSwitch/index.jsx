import PropTypes from 'prop-types';
import { useState } from 'react';

// utils
import isEmpty from '../../utils/isEmpty';

const ToggleSwitch = ({ toggleName = 'toggleSwitch', text }) => {
  const [checkedInput, setCheckedInput] = useState(false);

  return (
    <label htmlFor={toggleName} className='relative  flex items-center cursor-pointer'>
      {/* <!-- toggle --> */}
      <div className='relative'>
        {/* <!-- input --> */}
        <input
          type='checkbox'
          onChange={(evt) => setCheckedInput(evt.target.checked)}
          checked={checkedInput}
          id={toggleName}
          name={toggleName}
          className='sr-only peer'
        />
        {/* <!-- line --> */}
        <div className='block bg-custom-darker-gray peer-checked:bg-custom-black w-14 h-8 rounded-full'></div>
        {/* <!-- dot --> */}
        <div className='dot flex items-center justify-center absolute left-1 top-1 peer-checked:translate-x-[100%] bg-white w-6 h-6 rounded-full transition'>
          {checkedInput ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-4 h-4 fill-custom-darker-black'
            >
              <path
                fillRule='evenodd'
                d='M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-4 h-4 fill-custom-black'
            >
              <path d='M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z' />
            </svg>
          )}
        </div>
      </div>
      {/* <!-- label --> */}
      {!isEmpty(text) && <div className='ml-3 font-medium'>{text}</div>}
    </label>
  );
};

ToggleSwitch.propTypes = {
  toggleName: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default ToggleSwitch;
