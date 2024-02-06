import PropTypes from 'prop-types';

// assets
import DataGrap from '../../assets/images/data_graph.png';

const TotalAmountBlock = ({ icon, blockTitle, totalAmount, currentDataToday }) => {
  return (
    <div className='relative shadow p-5 rounded-xl bg-white flex flex-row items-center gap-x-4'>
      <div>
        <img src={icon} alt='x-ray-icon' className='w-[60px] max-w-[100%]' />
      </div>
      <div className='flex-1'>
        <div className='text-custom-dark-gray text-normal'>{blockTitle}</div>
        <div className='text-xl font-medium'>{totalAmount}</div>
      </div>
      <div className='flex flex-col w-[70px]'>
        <div className='mb-2 flex justify-end'>
          <img src={DataGrap} alt='data-graph' className='w-[60px]' />
        </div>
        <div className='flex flex-row w-full'>
          <div className='flex-1 text-custom-dark-gray text-sm'>Today:</div>
          <div className='text-sm font-medium text-custom-light-green'>{currentDataToday}</div>
        </div>
      </div>
    </div>
  );
};

TotalAmountBlock.propTypes = {
  icon: PropTypes.string,
  blockTitle: PropTypes.string,
  totalAmount: PropTypes.string,
  currentDataToday: PropTypes.string,
};

export default TotalAmountBlock;
