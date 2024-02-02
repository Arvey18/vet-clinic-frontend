import { Outlet, Navigate } from 'react-router-dom';

// stores
import authStore from '../../stores/authStore';

const ProtectedRoutes = () => {
  const { user } = authStore();
  return user !== null ? <Outlet /> : <Navigate to='/login' replace={true} />;
};

export default ProtectedRoutes;
