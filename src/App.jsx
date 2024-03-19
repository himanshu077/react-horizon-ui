import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Kanban from './pages/Kanban';
import MarketPlace from './pages/MarketPlace';
import SignIn from './pages/SignIn';
import Footer from './ui/Footer/Footer';
import Sidebar from './ui/Sidebar/Sidebar';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="flex min-h-screen bg-blue-50">
      {window.location.pathname !== '/signin' && <Sidebar />}
      
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        {window.location.pathname !== '/signin' && <Footer />}
      </main>
    </div>
  );
}

export default App;
