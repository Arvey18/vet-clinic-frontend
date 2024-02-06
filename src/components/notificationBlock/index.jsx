import Avatar2 from '../../assets/images/avatar2.png';

const NotificationBlock = () => {
  return (
    <div className='relative p-4 flex flex-row cursor-pointer hover:bg-gray-100'>
      {/* image avatar of notif */}
      <div className='w-[40px]'>
        <img className='max-w-[100%]' src={Avatar2} alt='profile-avatar' />
      </div>
      {/* details of notification */}
      <div className='flex-1 flex-flex-col pl-[10px]'>
        {/* work done by a person */}
        <div className='mb-1'>
          <p className='text-sm text-custom-dark-gray'>
            <span className='text-custom-black font-medium'>Isabelle Johnson</span> added new patients name Wacky.
          </p>
        </div>
        {/* timelapse of work done by a person */}
        <div className='text-xs text-custom-light-green font-normal'>a minute ago</div>
      </div>
      {/* indentifier if still unread, shown if still unread */}
      <div className='flex items-center'>
        <div className='rounded-full w-[10px] h-[10px] bg-red-500'></div>
      </div>
    </div>
  );
};

export default NotificationBlock;
