import React from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import LanguageSwitcher from './LanguageSwitcher';
import { useAuth } from '../context/Authcontext';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/path/to/your/logo.png" alt="FarmConnect Logo" className="h-8 mr-2" />
          <h1 className="text-white text-2xl font-bold">
            <Link to="/">FarmConnect Ghana</Link>
          </h1>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <HiX className="text-white h-6 w-6" /> : <HiMenu className="text-white h-6 w-6" />}
          </button>
        </div>

        <div className={`flex-col md:flex md:flex-row ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex items-center mt-2 md:mt-0">
            <Link className="text-white mr-4 hover:underline hover:underline-offset-4 hover:text-orange-300" to="/">Home</Link>

            {/* Links for non-authenticated users */}
            {!user && (
              <>
                <Link className="text-white mr-4 hover:underline hover:underline-offset-4 hover:text-orange-300" to="/register">Register</Link>
                <Link className="text-white mr-4 hover:underline hover:underline-offset-4 hover:text-orange-300" to="/login">Login</Link>
              </>
            )}

            {/* Links for authenticated users */}
            {user && (
              <>
                <Link className="text-white mr-4 hover:underline hover:underline-offset-4 hover:text-orange-300" to="/farmer-dashboard">Farmer Dashboard</Link>
                <Link className="text-white mr-4 hover:underline hover:underline-offset-4 hover:text-orange-300" to="/customer-dashboard">Customer Dashboard</Link>
                <Link className="text-white mr-4 hover:underline hover:underline-offset-4 hover:text-orange-300" to="/profile">View Profile</Link>
                <Link className="text-white mr-4 hover:underline hover:underline-offset-4 hover:text-orange-300" to="/settings">Settings</Link>
                <button onClick={logout} className="text-white mr-4 hover:underline hover:underline-offset-4 hover:text-orange-300">Logout</button>
              </>
            )}

            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
