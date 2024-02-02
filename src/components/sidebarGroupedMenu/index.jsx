import PropTypes from 'prop-types';

const SidebarGroupedMenu = ({ title, children }) => {
  return (
    <div className='mb-[30px] flex flex-col'>
      <div className='text-custom-dark-gray font-normal text-xs uppercase mb-[25px]'>{title}</div>
      <div>{children}</div>
    </div>
  );
};

SidebarGroupedMenu.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SidebarGroupedMenu;
