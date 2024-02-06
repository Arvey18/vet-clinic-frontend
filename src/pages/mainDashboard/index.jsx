import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// layouts
import DashboardLayout from '../../layouts/dashboardLayout';

// routes
const SubDashboardView = lazy(() => import('../subDashboardView'));

const MainDashboard = () => {
  return (
    <div className='w-full h-full'>
      <DashboardLayout>
        <>
          <Routes>
            <Route
              path='/'
              element={
                <Suspense fallback={<></>}>
                  <SubDashboardView />
                </Suspense>
              }
            />
          </Routes>
        </>
      </DashboardLayout>
    </div>
  );
};

export default MainDashboard;
