// assets
import DogAvatar from '../../../assets/images/dog.png';
import RegistrationImage from '../../../assets/images/registration.png';

// components
import DropdownV1 from '../../dropdown/v1';

const TableV1 = () => {
  return (
    <div className='relative w-full'>
      {/* table header */}
      <div className='relative shadow p-5 rounded-xl bg-white flex flex-row items-center gap-x-4'>
        <div className='flex-1 font-medium text-xl flex items-center'>
          <img src={RegistrationImage} alt='registration-image' className='w-[30px] align-bottom mr-2' />
          Latest Patients
        </div>
        <div className='flex flex-row items-center gap-4'>
          <div>
            <div className='relative p-2 cursor-pointer border border-custom-darker-gray rounded-full flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5 fill-custom-dark-gray'
              >
                <path
                  fillRule='evenodd'
                  d='M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
          <div>
            <div className='relative cursor-pointer rounded-full flex items-center bg-custom-light-green p-2 shadow hover:bg-custom-light-green-darker'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5 fill-white'
              >
                <path
                  fillRule='evenodd'
                  d='M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* table details */}
      <table className='table-auto w-full'>
        <thead>
          <tr>
            <th className='p-5 text-left'>
              <input
                id='checkbox-all-search'
                type='checkbox'
                className='w-4 h-4 text-custom-light-green bg-white border border-custom-darker-gray outline-none rounded dark:bg-gray-700 dark:border-custom-dark-gray'
              />
              <label htmlFor='checkbox-all-search' className='sr-only'>
                checkbox
              </label>
            </th>
            <th className='p-5 text-left'>ID</th>
            <th className='p-5 text-left'>Kind</th>
            <th className='p-5 text-left'>Name</th>
            <th className='p-5 text-left'>Owner</th>
            <th className='p-5 text-left'>Location</th>
            <th className='p-5 text-left'>Date</th>
            <th className='p-5 text-left'>Status</th>
            <th className='p-5 text-left'></th>
          </tr>
        </thead>
        <tbody>
          <tr className='relative overflow-hidden bg-white gap-x-4 '>
            <td className='relative rounded-tl-xl shadow rounded-bl-xl p-5'>
              <input
                id='checkbox-all-search-1'
                type='checkbox'
                className='w-4 h-4 text-custom-light-green bg-white border border-custom-darker-gray outline-none rounded dark:bg-gray-700 dark:border-gray-600'
              />
              <label htmlFor='checkbox-all-search-1' className='sr-only'>
                checkbox
              </label>
            </td>
            <td className='p-5 relative shadow font-medium'>RT836</td>
            <td className='p-5 relative shadow'>
              <img src={DogAvatar} alt='dog-avatar' className='w-[35px] align-middle' />
            </td>
            <td className='p-5 relative shadow font-medium'>Poopie</td>
            <td className='p-5 relative shadow font-medium'>Hannah Mae Garcia</td>
            <td className='p-5 relative shadow font-medium'>Camp Tinio</td>
            <td className='p-5 relative shadow font-medium'>15.02.2024</td>
            <td className='p-5 relative shadow font-medium'>
              <DropdownV1 />
            </td>
            <td className='relative p-5 shadow rounded-tr-xl rounded-br-xl'>
              <div className='border align-middle border-custom-darker-gray relative cursor-pointer rounded-full p-2 inline-block'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-4 h-4 fill-red-600'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className='mb-4'></div>
            </td>
          </tr>
          <tr className='relative overflow-hidden bg-white gap-x-4 '>
            <td className='relative rounded-tl-xl shadow rounded-bl-xl p-5'>
              <input
                id='checkbox-all-search-1'
                type='checkbox'
                className='w-4 h-4 text-custom-light-green bg-white border border-custom-darker-gray outline-none rounded dark:bg-gray-700 dark:border-gray-600'
              />
              <label htmlFor='checkbox-all-search-1' className='sr-only'>
                checkbox
              </label>
            </td>
            <td className='p-5 relative shadow font-medium'>RT836</td>
            <td className='p-5 relative shadow text-xs'>
              <img src={DogAvatar} alt='dog-avatar' className='w-[35px] align-middle' />
            </td>
            <td className='p-5 relative shadow font-medium'>Poopie</td>
            <td className='p-5 relative shadow font-medium'>Hannah Mae Garcia</td>
            <td className='p-5 relative shadow font-medium'>Camp Tinio</td>
            <td className='p-5 relative shadow font-medium'>15.02.2024</td>
            <td className='p-5 relative shadow font-medium'>
              <DropdownV1 />
            </td>
            <td className='relative p-5 shadow rounded-tr-xl rounded-br-xl'>
              <div className='border align-middle border-custom-darker-gray relative cursor-pointer rounded-full p-2 inline-block'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-4 h-4 fill-red-600'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className='mb-4'></div>
            </td>
          </tr>
          <tr className='relative overflow-hidden bg-white gap-x-4 '>
            <td className='relative rounded-tl-xl shadow rounded-bl-xl p-5'>
              <input
                id='checkbox-all-search-1'
                type='checkbox'
                className='w-4 h-4 text-custom-light-green bg-white border border-custom-darker-gray outline-none rounded dark:bg-gray-700 dark:border-gray-600'
              />
              <label htmlFor='checkbox-all-search-1' className='sr-only'>
                checkbox
              </label>
            </td>
            <td className='p-5 relative shadow font-medium'>RT836</td>
            <td className='p-5 relative shadow'>
              <img src={DogAvatar} alt='dog-avatar' className='w-[35px] align-middle' />
            </td>
            <td className='p-5 relative shadow font-medium'>Poopie</td>
            <td className='p-5 relative shadow font-medium'>Hannah Mae Garcia</td>
            <td className='p-5 relative shadow font-medium'>Camp Tinio</td>
            <td className='p-5 relative shadow font-medium'>15.02.2024</td>
            <td className='p-5 relative shadow font-medium'>
              <DropdownV1 />
            </td>
            <td className='relative p-5 shadow rounded-tr-xl rounded-br-xl'>
              <div className='border align-middle border-custom-darker-gray relative cursor-pointer rounded-full p-2 inline-block'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-4 h-4 fill-red-600'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className='mb-4'></div>
            </td>
          </tr>
          <tr className='relative overflow-hidden bg-white gap-x-4 '>
            <td className='relative rounded-tl-xl shadow rounded-bl-xl p-5'>
              <input
                id='checkbox-all-search-1'
                type='checkbox'
                className='w-4 h-4 text-custom-light-green bg-white border border-custom-darker-gray outline-none rounded dark:bg-gray-700 dark:border-gray-600'
              />
              <label htmlFor='checkbox-all-search-1' className='sr-only'>
                checkbox
              </label>
            </td>
            <td className='p-5 relative shadow font-medium'>RT836</td>
            <td className='p-5 relative shadow'>
              <img src={DogAvatar} alt='dog-avatar' className='w-[35px] align-middle' />
            </td>
            <td className='p-5 relative shadow font-medium'>Poopie</td>
            <td className='p-5 relative shadow font-medium'>Hannah Mae Garcia</td>
            <td className='p-5 relative shadow font-medium'>Camp Tinio</td>
            <td className='p-5 relative shadow font-medium'>15.02.2024</td>
            <td className='p-5 relative shadow font-medium'>
              <DropdownV1 />
            </td>
            <td className='relative p-5 shadow rounded-tr-xl rounded-br-xl'>
              <div className='border align-middle border-custom-darker-gray relative cursor-pointer rounded-full p-2 inline-block'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-4 h-4 fill-red-600'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className='mb-4'></div>
            </td>
          </tr>
          <tr className='relative overflow-hidden bg-white gap-x-4 '>
            <td className='relative rounded-tl-xl shadow rounded-bl-xl p-5'>
              <input
                id='checkbox-all-search-1'
                type='checkbox'
                className='w-4 h-4 text-custom-light-green bg-white border border-custom-darker-gray outline-none rounded dark:bg-gray-700 dark:border-gray-600'
              />
              <label htmlFor='checkbox-all-search-1' className='sr-only'>
                checkbox
              </label>
            </td>
            <td className='p-5 relative shadow font-medium'>RT836</td>
            <td className='p-5 relative shadow'>
              <img src={DogAvatar} alt='dog-avatar' className='w-[35px] align-middle' />
            </td>
            <td className='p-5 relative shadow font-medium'>Poopie</td>
            <td className='p-5 relative shadow font-medium'>Hannah Mae Garcia</td>
            <td className='p-5 relative shadow font-medium'>Camp Tinio</td>
            <td className='p-5 relative shadow font-medium'>15.02.2024</td>
            <td className='p-5 relative shadow font-medium'>
              <DropdownV1 />
            </td>
            <td className='relative p-5 shadow rounded-tr-xl rounded-br-xl'>
              <div className='border align-middle border-custom-darker-gray relative cursor-pointer rounded-full p-2 inline-block'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-4 h-4 fill-red-600'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableV1;
