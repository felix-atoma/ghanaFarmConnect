import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile'
import FarmerDashboard from './pages/FarmerDashboard';
import CustomerDashboard from './pages/CustomerDashboard';
import SignUp from './pages/SignUpage';
import { AuthProvider } from './context/Authcontext'
import LanguageSwitcher from './layout/LanguageSwitcher';
import FarmerProfile from './pages/FarmerProfile';
import CustomerProfile from './pages/CustomerProfile';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
              <Route path="/customer-dashboard" element={<CustomerDashboard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/language-switcher" element={<LanguageSwitcher />} />
              <Route path="/farmer-profile" element={<FarmerProfile/>} />
              <Route path="/customer-profile" element={<CustomerProfile />} />
            
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
