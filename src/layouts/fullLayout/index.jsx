import PropTypes from 'prop-types';
import ScrollBarWrapper from '../../components/scrollbar';

const FullLayout = ({ children }) => {
  return (
    <div className='h-full w-full overflow-y-auto bg-custom-gray'>
      <ScrollBarWrapper>{children}</ScrollBarWrapper>
    </div>
  );
};

FullLayout.propTypes = {
  children: PropTypes.node,
};

export default FullLayout;
