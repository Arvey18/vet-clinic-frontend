import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// layouts
import DashboardLayout from '../../layouts/dashboardLayout';

// components
import ScrollBarWrapper from '../../components/scrollbar';

// routes
const SubDashboardView = lazy(() => import('../subDashboardView'));

const MainDashboard = () => {
  return (
    <div className='w-full h-full'>
      <DashboardLayout>
        <ScrollBarWrapper>
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
        </ScrollBarWrapper>
      </DashboardLayout>
    </div>
  );
};

export default MainDashboard;
