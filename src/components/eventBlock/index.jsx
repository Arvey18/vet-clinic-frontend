import PropTypes from 'prop-types';

// utils
import isEmpty from '../../utils/isEmpty';

const EventBlock = ({ color, timeColor, descriptionColor }) => {
  return (
    <div className='flex flex-col p-4'>
      {/* time of event */}
      <div className={`font-light text-sm ${!isEmpty(timeColor) ? timeColor : 'text-custom-light-green'}`}>9:00 AM</div>
      {/* person who schedule the appointment */}
      <div className={`font-medium ${!isEmpty(color) ? color : ''} text-normal mb-2`}>
        Josephine Almerante scheduled an appointment
      </div>
      {/* work to do for client */}
      <div className={`${!isEmpty(descriptionColor) ? descriptionColor : 'text-custom-dark-gray'} text-xs`}>
        Clients wants to groom her puppy and do checkup do
      </div>
    </div>
  );
};

EventBlock.propTypes = {
  color: PropTypes.string,
  timeColor: PropTypes.string,
  descriptionColor: PropTypes.string,
};

export default EventBlock;
