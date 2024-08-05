import React, { createContext, useContext, useState } from 'react';

// Create an AuthContext
const AuthContext = createContext();

// Provide AuthContext to the rest of the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Set user state

  // Mock login function
  const login = async ({ email, password }) => {
    // Replace with actual login logic (e.g., API call)
    // Example: Mock successful login
    const mockUser = { email }; // Example user data
    setUser(mockUser);
    return mockUser;
  };

  // Mock logout function
  const logout = () => {
    setUser(null);
  };

  // Check if user is authenticated
  const isAuthenticated = () => user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
