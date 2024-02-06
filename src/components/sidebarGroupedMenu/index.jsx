import PropTypes from 'prop-types';

const SidebarGroupedMenu = ({ title, children }) => {
  return (
    <div className='mb-[30px] flex flex-col'>
      {/* group title of sidebar menus */}
      <div className='text-custom-dark-gray font-normal text-xs uppercase mb-[25px]'>{title}</div>
      {/* side bar menu lists */}
      <div>{children}</div>
    </div>
  );
};

SidebarGroupedMenu.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default SidebarGroupedMenu;
