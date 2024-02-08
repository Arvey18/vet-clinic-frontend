import PropTypes from 'prop-types';

// assets
import BarChart from '../../assets/images/bar-chart.png';

// utils
import isEmpty from '../../utils/isEmpty';

const TotalAmountBlock = ({ icon, blockTitle, totalAmount, currentDataToday, dataGraphIcon, amountIcon }) => {
  return (
    <div className='relative shadow p-5 rounded-xl bg-white flex flex-row items-center gap-x-4'>
      <div>
        <img src={icon} alt='x-ray-icon' className='w-[60px] max-w-[100%]' />
      </div>
      <div className='flex-1'>
        <div className='text-custom-dark-gray text-normal'>{blockTitle}</div>
        <div className='text-xl font-medium'>
          {totalAmount} {!isEmpty(amountIcon) ? <div className='inline'>{amountIcon}</div> : null}
        </div>
      </div>
      <div className='flex flex-col w-[70px]'>
        <div className='mb-2 flex justify-end'>
          <img src={dataGraphIcon || BarChart} alt='data-graph' className='w-[60px]' />
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
  dataGraphIcon: PropTypes.string,
  blockTitle: PropTypes.string,
  amountIcon: PropTypes.node,
  totalAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currentDataToday: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TotalAmountBlock;
