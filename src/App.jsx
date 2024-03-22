import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Kanban from './pages/Kanban';
import MarketPlace from './pages/MarketPlace';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Tables from './pages/Tables';
import HeaderSidebar from './common/HeaderSidebar/HeaderSidebar';
import Sidebar from './common/Sidebar/Sidebar';
import Footer from './common/Footer/Footer';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 908);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSignInPage = location.pathname === '/signin';

  return (
    <div className="flex min-h-screen !w-full ">
      {isSignInPage ? null : (isSmallScreen ? null : <Sidebar />)}
      {isSignInPage ? null : (isSmallScreen ? <HeaderSidebar /> : null)}
      <main className='flex-1'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        {isSignInPage ? null :  <Footer />}
      </main>
    </div>
  );
}

export default App;
