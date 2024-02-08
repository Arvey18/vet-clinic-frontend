import { useLocation } from 'react-router-dom';

// constants
import serverConfig from '../../constants/serverConfig';
import sidebarMenus from '../../constants/sidebarMenus.jsx';

// assets
import Logo from '../../assets/images/vcs-logo-white.png';

// components
import SidebarGroupedMenu from '../sidebarGroupedMenu';
import SidebarMenu from '../sidebarMenu';
import ScrollBarWrapper from '../scrollbar';

const Sidebar = () => {
  // initialize use location of react router dom
  // to get pathname using in sidebar menu
  const location = useLocation();
  const { pathname: path } = location;

  const { VERSION } = serverConfig;

  return (
    <div className='relative w-full h-full max-w-[256px] pb-[35px] bg-custom-black overflow-hidden'>
      {/* scrollable content using custom scrollbar wrapper */}
      <ScrollBarWrapper>
        {/* consts of sidebar */}
        <div className='relative flex py-[10px] px-[20px] flex-col'>
          {/* logo section */}
          <div className='flex items-center text-[18px] font-semibold text-white mb-[40px]'>
            <img className='w-[150px] mt-[10px] mx-auto' src={Logo} alt='logo' />
          </div>

          {/* location Branch details */}
          <div className='w-full bg-custom-darkest-gray rounded-xl py-[12px] px-[20px] flex flex-row gap-x-[10px] mb-[30px]'>
            <div>
              <div className='flex items-center rounded-full  p-[10px] bg-orange-400'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' className='w-5 h-5'>
                  <path d='M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z' />
                  <path
                    fillRule='evenodd'
                    d='M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
            <div className='flex-1'>
              <div className='text-white font-medium text-sm'>Furs and Tails</div>
              <div className='text-custom-darker-gray font-light text-xs'>Admin</div>
            </div>
          </div>

          {/* sidebar menus */}
          {sidebarMenus.map((groupedMenu, key) => {
            return (
              <SidebarGroupedMenu key={`${groupedMenu.groupTitle}-${key}`} title={groupedMenu.groupTitle}>
                {groupedMenu.menus.map((menu, key) => {
                  return (
                    <SidebarMenu
                      key={`${menu.linkTitle}-${key}`}
                      icon={
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                          className={`w-6 h-6 ${
                            path === menu.link ? 'fill-custom-light-green' : 'fill-custom-dark-gray'
                          } group-hover:fill-custom-light-green`}
                        >
                          {menu.icon()}
                        </svg>
                      }
                      title={menu.linkTitle}
                      isActive={path === menu.link ? true : false}
                    />
                  );
                })}
              </SidebarGroupedMenu>
            );
          })}
        </div>
      </ScrollBarWrapper>
      <div className='text-custom-dark-gray text-sm font-light text-right pr-[20px] pb-[20px]'>
        Version: <span>{VERSION}</span>
      </div>
    </div>
  );
};

export default Sidebar;
