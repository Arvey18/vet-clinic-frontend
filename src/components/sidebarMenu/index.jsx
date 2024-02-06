import PropTypes from 'prop-types';

const SidebarMenu = ({ title, icon, isActive }) => {
  return (
    <div className='relative group mb-[20px] cursor-pointer flex flex-row gap-x-[10px]'>
      {/* icon of sidebar menu */}
      <div>{icon}</div>
      {/* title of sidebar menu with active state */}
      <div
        className={`${
          isActive ? 'text-white' : 'text-custom-dark-gray'
        } group-hover:text-white font-medium text-base flex-1`}
      >
        {title}
      </div>
    </div>
  );
};

SidebarMenu.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
  icon: PropTypes.node,
};

export default SidebarMenu;
