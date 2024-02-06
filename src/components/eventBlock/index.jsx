const EventBlock = () => {
  return (
    <div className='flex flex-col p-4'>
      {/* time of event */}
      <div className='font-light text-sm text-custom-light-green'>9:00 AM</div>
      {/* person who schedule the appointment */}
      <div className='font-medium text-normal mb-2'>Josephine Almerante scheduled an appointment</div>
      {/* work to do for client */}
      <div className='text-custom-dark-gray text-xs'>Clients wants to groom her puppy and do checkup do</div>
    </div>
  );
};

export default EventBlock;
