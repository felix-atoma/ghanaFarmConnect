import React, { useState } from 'react';  
import { Link } from 'react-router-dom';  
import { HiMenu, HiX } from 'react-icons/hi';  
import LanguageSwitcher from './LanguageSwitcher';  

const NavBar = () => {  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
  };  

  return (  
    <nav className="bg-green-600 p-4">  
      <div className="container mx-auto flex justify-between items-center">  
        <div className="flex items-center">  
          <img src="/path/to/your/logo.png" alt="FarmConnect Logo" className="h-8 mr-2" />  
          <h1 className="text-white text-2xl">FarmConnect Ghana</h1>  
        </div>  

        <div className="md:hidden">  
          <button onClick={toggleMenu} aria-label="Toggle menu">  
            {isOpen ? <HiX className="text-white h-6 w-6" /> : <HiMenu className="text-white h-6 w-6" />}  
          </button>  
        </div>  

        <div className={`flex-col md:flex md:flex-row ${isOpen ? 'block' : 'hidden'} md:block`}>  
          <div className="flex items-center mt-2 md:mt-0">  
            <Link className="text-white mr-4" to="/">Home</Link>  
            <Link className="text-white mr-4" to="/farmer-dashboard">Farmer Dashboard</Link>  
            <Link className="text-white mr-4" to="/customer-dashboard">Customer Dashboard</Link>  
            <Link className='text-white mr-4' to="/register">Register</Link>  
            <Link className='text-white mr-4' to="/login">Login</Link>  
            <LanguageSwitcher /> {/* Including the Language Switcher here */}  
          </div>  
        </div>  
      </div>  
    </nav>  
  );  
};  

export default NavBar;