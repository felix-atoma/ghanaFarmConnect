// src/context/AuthContext.jsx

import { createContext, useContext, useState } from 'react';
// Correct path and name
 // Ensure this export exists

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    try {
      const userData = await loginUser(email, password);
      setUser(userData.user); // Adjust according to the actual response structure
      localStorage.setItem('token', userData.token); // Adjust as needed
    } catch (error) {
      console.error('Login failed:', error);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
