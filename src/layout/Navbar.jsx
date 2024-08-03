import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import LanguageSwitcher from './LanguageSwitcher';
import { useAuth } from '../context/Authcontext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDashboardMenu = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="bg-green-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/path/to/your/logo.png" alt="FarmConnect Logo" className="h-8 mr-2" />
          <h1 className="text-white text-2xl font-bold"><Link to="/">FarmConnect Ghana</Link></h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <HiX className="text-white h-6 w-6" /> : <HiMenu className="text-white h-6 w-6" />}
          </button>
        </div>

        <div className={`flex-col md:flex md:flex-row ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex items-center mt-2 md:mt-0">
            <Link className="text-white mr-4" to="/">Home</Link>

            {/* Links for non-authenticated users */}
            {!user && (
              <>
                <Link to="/register" className="text-white mr-4">Register</Link>
                <Link to="/login" className="text-white mr-4">Login</Link>
              </>
            )}

            {/* Dashboard Menu (Visible only when logged in) */}
            {user && (
              <div className="relative">
                <button
                  className="text-white mr-4 flex items-center focus:outline-none"
                  onClick={toggleDashboardMenu}
                >
                  Dashboard <HiChevronDown className="ml-1" />
                </button>
                {isDashboardOpen && (
                  <div className="absolute bg-white text-black p-2 mt-2 shadow-lg rounded-md">
                    <Link className="block px-4 py-2 hover:bg-gray-200" to="/farmer-dashboard">
                      Farmer Dashboard
                    </Link>
                    <Link className="block px-4 py-2 hover:bg-gray-200" to="/customer-dashboard">
                      Customer Dashboard
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Profile Dropdown (Visible only when logged in) */}
            {user && (
              <div className="relative">
                <button
                  className="text-white mr-4 flex items-center focus:outline-none"
                  onClick={toggleProfileMenu}
                >
                  Profile <HiChevronDown className="ml-1" />
                </button>
                {isProfileOpen && (
                  <div className="absolute bg-white text-black p-2 mt-2 shadow-lg rounded-md">
                    <Link className="block px-4 py-2 hover:bg-gray-200" to="/profile">
                      View Profile
                    </Link>
                    <Link className="block px-4 py-2 hover:bg-gray-200" to="/settings">
                      Settings
                    </Link>
                  </div>
                )}
              </div>
            )}

            {user && (
              <button onClick={logout} className="text-white mr-4">Logout</button>
            )}
            
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
