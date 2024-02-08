// assets
import WaveHand from '../../assets/images/wave.png';

// constants
import totalAmountBlock from '../../constants/totalAmountBlocksData';
import moneyIncomeOutcome from '../../constants/moneyIncomeOutcome';

// components
import TotalAmountBlock from '../../components/totalAmountsBlock';
import TableV1 from '../../components/table/v1';
import AppointmentsBlock from '../../components/appointmentsBlock';
import TimeTrackerBlock from '../../components/timeTrackerBlock';

const SubDashboardView = () => {
  return (
    <div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
      {/* view header welcome section */}
      <div className='flex flex-row gap-x-10 mb-10'>
        <div className='flex-1'>
          <div className='font-semibold text-2xl flex items-center'>
            Welcome back, John Doe <img src={WaveHand} className='ml-2 w-[30px]' alt='wave-hand' />
          </div>
          <div className='text-normal font-normal text-custom-dark-gray'>
            <p>
              Furs and Tails is in working mode: <span className='font-medium text-custom-light-green'>Normal</span>
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='relative shadow flex items-center line-height-[1px] cursor-pointer text-sm font-medium bg-custom-light-green text-white hover:bg-custom-light-green-darker rounded-full py-2 px-5'>
            Add Patient
          </div>
        </div>
      </div>
      {/* view first section */}
      <div className='grid grid-cols-3 gap-10 mb-10'>
        {totalAmountBlock.map((value, key) => {
          return (
            <TotalAmountBlock
              key={`total-amount-block-${key}`}
              icon={value.icon}
              blockTitle={value.blockTitle}
              totalAmount={value.totalAmount}
              currentDataToday={value.currentTodayData}
            />
          );
        })}
      </div>
      {/* view second section */}
      <div className='grid grid-flow-col gap-10'>
        <div className='col-span-9'>
          {/* latest patients label */}
          <div className='mb-10'>
            <TableV1 />
          </div>
          <div className='grid grid-flow-col gap-10'>
            <div className='col-span-6'>
              {/* latest income current week computation */}
              <TotalAmountBlock
                icon={moneyIncomeOutcome['income'].icon}
                blockTitle={moneyIncomeOutcome['income'].blockTitle}
                totalAmount={moneyIncomeOutcome['income'].totalAmount}
                currentDataToday={moneyIncomeOutcome['income'].currentTodayData}
                dataGraphIcon={moneyIncomeOutcome['income'].dataGraphIcon}
                amountIcon={moneyIncomeOutcome['income'].amountIcon()}
              />
            </div>
            <div className='col-span-6'>
              {/* latest expense current week computation */}
              <TotalAmountBlock
                icon={moneyIncomeOutcome['outcome'].icon}
                blockTitle={moneyIncomeOutcome['outcome'].blockTitle}
                totalAmount={moneyIncomeOutcome['outcome'].totalAmount}
                currentDataToday={moneyIncomeOutcome['outcome'].currentTodayData}
                dataGraphIcon={moneyIncomeOutcome['outcome'].dataGraphIcon}
                amountIcon={moneyIncomeOutcome['outcome'].amountIcon()}
              />
            </div>
          </div>
        </div>
        <div className='col-span-3'>
          <div className='mb-10'>
            <AppointmentsBlock />
          </div>
          <div>
            <TimeTrackerBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubDashboardView;
