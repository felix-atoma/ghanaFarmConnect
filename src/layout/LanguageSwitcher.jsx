import React, { useState, useRef, useEffect } from 'react';  
import { useTranslation } from 'react-i18next';  

const LanguageSwitcher = () => {  
  const { i18n } = useTranslation();  
  const [isOpen, setIsOpen] = useState(false);  
  const dropdownRef = useRef(null);  

  const toggleDropdown = () => {  
    setIsOpen(!isOpen);  
  };  

  const changeLanguage = (lang) => {  
    i18n.changeLanguage(lang);  
    setIsOpen(false); // Close the dropdown after selecting a language  
  };  

  // Close dropdown when clicking outside  
  useEffect(() => {  
    const handleClickOutside = (event) => {  
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {  
        setIsOpen(false);  
      }  
    };  

    document.addEventListener('mousedown', handleClickOutside);  
    return () => {  
      document.removeEventListener('mousedown', handleClickOutside);  
    };  
  }, []);  

  return (  
    <div className="relative" ref={dropdownRef}>  
      <button  
        onClick={toggleDropdown}  
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"  
      >  
        Language  
      </button>  

      {isOpen && (  
        <div className="absolute right-0 z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">  
          <div className="py-1" role="none">  
            <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">EN</button>  
            <button onClick={() => changeLanguage('twi')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">TWI</button>  
            <button onClick={() => changeLanguage('ga')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">GA</button>  
            <button onClick={() => changeLanguage('ewe')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">EWE</button>  
          </div>  
        </div>  
      )}  
    </div>  
  );  
};  

export default LanguageSwitcher;