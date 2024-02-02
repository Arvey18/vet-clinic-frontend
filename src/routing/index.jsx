import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Routing Conditions
import ProtectedRoutes from './protectedRoutes';
import RestrictedRoutes from './restrictedRoutes';

// pages
const MainDashboard = lazy(() => import('../pages/mainDashboard'));
const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));
const PageNotFound = lazy(() => import('../pages/404'));

const RoutesConfig = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route
          path='/'
          element={
            <Suspense fallback={<></>}>
              <MainDashboard />
            </Suspense>
          }
        />
      </Route>
      <Route element={<RestrictedRoutes />}>
        <Route
          path='/register'
          element={
            <Suspense fallback={<></>}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path='/login'
          element={
            <Suspense fallback={<></>}>
              <Login />
            </Suspense>
          }
        />
      </Route>
      <Route
        path='*'
        element={
          <Suspense fallback={<></>}>
            <PageNotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RoutesConfig;
