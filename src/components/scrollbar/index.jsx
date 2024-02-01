import { useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import PropTypes from 'prop-types';

const ScrollBarWrapper = ({ children, className = '' }) => {
  const scrollbar = useRef(undefined);

  return (
    <Scrollbars
      className={`scroll-view ${className}`}
      autoHide={false}
      autoHeightMin={'100%'}
      autoHeightMax={'100%'}
      universal={true}
      ref={scrollbar}
      renderTrackHorizontal={(props) => <div {...props} style={{ display: 'none' }} className='track-horizontal' />}
      renderThumbHorizontal={(props) => <div {...props} style={{ display: 'none' }} className='track-horizontal' />}
    >
      {children}
    </Scrollbars>
  );
};

ScrollBarWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ScrollBarWrapper;
