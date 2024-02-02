// components
import AlertHeader from '../alertHeader';
import AvatarHeader from '../avatarHeader';
import SearchHeader from '../searchHeader';
import ToggleSwitch from '../toggleSwitch';
import CalendarHeader from '../calendarHeader';

const Header = () => {
  return (
    <div className='relative shadow w-full h-[80px] px-[40px] flex flex-row gap-x-[10px] bg-white items-center'>
      {/* search header */}
      <div className='flex-1 pr-[10px]'>
        <SearchHeader />
      </div>
      {/* alert header */}
      <div>
        <AlertHeader />
      </div>
      {/* calendar header */}
      <div>
        <CalendarHeader />
      </div>
      {/* theme switch */}
      <div className='mr-[5px]'>
        <ToggleSwitch toggleName='theme-switch' />
      </div>
      {/* avatar header */}
      <div className='flex flex-row items-center'>
        <div className='w-[1px] h-[35px] mr-[15px] bg-custom-darker-gray'></div>
        <AvatarHeader />
      </div>
    </div>
  );
};

export default Header;
