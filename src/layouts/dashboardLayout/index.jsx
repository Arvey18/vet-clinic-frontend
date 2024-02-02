import PropTypes from 'prop-types';

// components
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';

const DashboardLayout = ({ children }) => {
  return (
    <div className='w-full h-full flex flex-row'>
      <Sidebar />
      <div className='flex-1 flex flex-col bg-custom-gray'>
        <Header />
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default DashboardLayout;
