import { create } from 'zustand';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { jwtDecode } from 'jwt-decode';

// constants
import serverConfig from '../constants/serverConfig';

// utils
import isEmpty from '../utils/isEmpty';

const cookies = new Cookies();

const errorHandler = (data) => {
  let message = 'Something went wrong, Please try again!';
  message = !isEmpty(data.response) ? data.response?.data?.errors[0].msg : message;
  return {
    success: false,
    error: true,
    message: message,
    loading: false,
  };
};

const extractToken = () => {
  const cookieToken = cookies.get('token');
  if (isEmpty(cookieToken)) {
    return null;
  }
  const tokenData = jwtDecode(cookieToken);
  return {
    email: tokenData.email,
    token: tokenData,
  };
};

const authStore = create((set) => ({
  // states
  user: extractToken(),
  error: false,
  success: false,
  message: '',
  loading: false,
  // functions
  updateLoading: (status) => set(() => ({ loading: status })),
  loginUser: async (email, password) => {
    const payload = {
      email,
      password,
    };

    try {
      const { API_BASE_URL } = serverConfig;
      const options = {
        baseURL: `${API_BASE_URL}/api/auth/login`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 60000,
        data: { ...payload },
      };

      const data = await axios.request(options);
      if (data.status === 200) {
        console.log(data, data.data, 'Successful login!');
        cookies.set('token', data.data.user.token, { path: '/' });
        set(() => ({
          user: data.data.user,
          success: true,
          error: false,
          message: '',
          loading: false,
        }));
      } else {
        console.log(data, 'Successful API call but status not 200 upon login!');
        return set(() => ({ ...errorHandler(data) }));
      }
    } catch (error) {
      console.log(error, 'Something went wrong upon login!');
      return set(() => ({ ...errorHandler(error) }));
    }
  },
  logoutUser: () => {},
}));

export default authStore;
