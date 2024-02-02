import { Outlet, Navigate } from 'react-router-dom';

// stores
import authStore from '../../stores/authStore';

const RestrictedRoutes = () => {
  const { user } = authStore();
  return user === null ? <Outlet /> : <Navigate to='/' replace={true} />;
};

export default RestrictedRoutes;
