import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// layouts
import FullLayout from '../../layouts/fullLayout';

// stores
import authStore from '../../stores/authStore';

// assets
import Logo from '../../assets/images/vcs-logo-black.png';

const Login = () => {
  // initialize auth store
  const { updateLoading, loginUser, error, message, loading } = authStore();

  // initialize hook navigate
  const navigate = useNavigate();

  // creating refs for input fields
  // using it to get values upon login
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  // function to fire login and
  // use zustand function login
  const handeLogin = () => {
    updateLoading(true);
    loginUser(emailInputRef.current.value, passwordInputRef.current.value);
  };

  return (
    <FullLayout>
      <div className='h-full w-full overflow-hidden relative'>
        {/* circle top */}
        <div className='w-[1000px] h-[1000px] rounded-[100%] bg-custom-light-green absolute right-[-400px] top-[-400px]'></div>

        {/* login form */}
        <div className='relative max-w-[1400px] h-full flex items-center mx-auto py-10 px-20 z-[1]'>
          <div className='flex flex-col items-center w-full'>
            {/* logo and branding section */}
            <div className='flex items-center text-[18px] font-semibold text-white mb-[10px]'>
              <img className='w-[250px] mx-auto' src={Logo} alt='logo' />
            </div>

            {/* content section with the input fields */}
            <div className='relative w-full bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                  Log in to your account
                </h1>
                <div className='space-y-4 md:space-y-6'>
                  <div>
                    <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                      Your email
                    </label>
                    <input
                      ref={emailInputRef}
                      type='email'
                      name='email'
                      id='email'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='name@company.com'
                      required=''
                    />
                  </div>
                  <div>
                    <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                      Password
                    </label>
                    <input
                      ref={passwordInputRef}
                      type='password'
                      name='password'
                      id='password'
                      placeholder='••••••••'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      required=''
                    />
                  </div>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-start'>
                      <div className='flex items-center h-5'>
                        <input
                          id='remember'
                          aria-describedby='remember'
                          type='checkbox'
                          className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer'
                          required=''
                        />
                      </div>
                      <div className='ml-3 text-sm cursor-pointer'>
                        <label htmlFor='remember' className='text-gray-500 dark:text-gray-300 cursor-pointer'>
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a href='#' className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'>
                      Forgot password?
                    </a>
                  </div>
                  {error && <div className='text-sm font-bold text-red-600'>{message}</div>}
                  <button
                    type='submit'
                    disabled={loading}
                    className='h-[45px] w-full text-white disabled:bg-custom-darker-gray bg-custom-light-green outline-none hover:bg-custom-light-green-darker focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-custom-light-green dark:hover:bg-custom-light-green-darker dark:focus:ring-primary-800'
                    onClick={handeLogin}
                  >
                    {!loading ? (
                      'Log in'
                    ) : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='#2A2A2A'
                        className='w-5 h-5 animate-spin mx-auto'
                      >
                        <path
                          fillRule='evenodd'
                          d='M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z'
                          clipRule='evenodd'
                        />
                      </svg>
                    )}
                  </button>
                  <div className='text-sm font-light text-gray-500 dark:text-gray-400'>
                    Don’t have an account yet?{' '}
                    <div
                      onClick={() => navigate('/register')}
                      className='font-medium inline cursor-pointer text-primary-600 hover:underline dark:text-primary-500'
                    >
                      Sign up
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* circle bottom */}
        <div className='w-[700px] h-[700px] rounded-[100%] bg-custom-darker-gray absolute left-[-200px] bottom-[-200px]'></div>
      </div>
    </FullLayout>
  );
};

export default Login;
