import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// layouts
import FullLayout from '../../layouts/fullLayout';

// stores
import authStore from '../../stores/authStore';

// assets
import Logo from '../../assets/images/vcs-logo-black.png';

// utils
import isEmpty from '../../utils/isEmpty';

const Register = () => {
  // states
  const [disabledCreateAccountButton, setDisabledCreateAccountButton] = useState(true);
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // initialize auth store
  const { updateLoading, error, message, loading, updateError, registerUser } = authStore();

  // initialize hook navigate
  const navigate = useNavigate();

  // function to fire login and
  // use zustand function login
  const handeRegister = () => {
    updateLoading(true);
    registerUser(email, password1);
  };

  useEffect(() => {
    // check for changes on password and confirm password
    // and show error immediately to user if not match
    if (!isEmpty(password1) && !isEmpty(password2)) {
      if (password1 !== password2) {
        updateError(true, 'Password is not match!');
      } else {
        updateError(false, '');
      }
    } else {
      updateError(false, '');
    }
    // check if all fields are not empty and accepted
    // terms with password match
    if (
      !isEmpty(password1) &&
      !isEmpty(password1) &&
      !isEmpty(password2) &&
      password1 === password2 &&
      acceptedTerms === true
    ) {
      setDisabledCreateAccountButton(false);
    } else {
      setDisabledCreateAccountButton(true);
    }
  }, [email, password1, password2, acceptedTerms, updateError]);

  return (
    <FullLayout>
      <div className='h-full w-full overflow-hidden relative'>
        {/* circle top */}
        <div className='w-[1000px] h-[1000px] rounded-[100%] bg-custom-light-green absolute right-[-400px] top-[-400px]'></div>

        {/* register form */}
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
                  Create an account
                </h1>
                <div className='space-y-4 md:space-y-6' action='#'>
                  <div>
                    <label
                      htmlFor='email-register'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Your email
                    </label>
                    <input
                      type='email'
                      name='email-register'
                      id='email-register'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='name@company.com'
                      required=''
                      onChange={(evt) => setEmail(evt.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='password-register'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Password
                    </label>
                    <input
                      type='password'
                      name='password-register'
                      id='password-register'
                      placeholder='••••••••'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      required=''
                      onChange={(evt) => setPassword1(evt.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='confirm-password-register'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Confirm password
                    </label>
                    <input
                      type='password'
                      name='confirm-password-register'
                      id='confirm-password-register'
                      placeholder='••••••••'
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      required=''
                      onChange={(evt) => setPassword2(evt.target.value)}
                    />
                  </div>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='terms-register'
                        aria-describedby='terms-register'
                        type='checkbox'
                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer'
                        required=''
                        onChange={(evt) => setAcceptedTerms(evt.target.checked)}
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='terms-register'
                        className='font-light text-gray-500 dark:text-gray-300 cursor-pointer'
                      >
                        I accept the{' '}
                        <a className='font-medium text-primary-600 hover:underline dark:text-primary-500' href='#'>
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  {error && <div className='text-sm font-bold text-red-600'>{message}</div>}
                  <button
                    type='submit'
                    disabled={loading || disabledCreateAccountButton}
                    className='h-[45px] w-full text-white disabled:bg-custom-darker-gray bg-custom-light-green outline-none hover:bg-custom-light-green-darker focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-custom-light-green dark:hover:bg-custom-light-green-darker dark:focus:ring-primary-800'
                    onClick={handeRegister}
                  >
                    {!loading ? (
                      'Create and account'
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
                    Already have an account?{' '}
                    <div
                      onClick={() => navigate('/login')}
                      className='font-medium inline cursor-pointer text-primary-600 hover:underline dark:text-primary-500'
                    >
                      Login here
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

export default Register;
