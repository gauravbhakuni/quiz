// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Ensure this is used within a component wrapped by <BrowserRouter>

  const login = (email, password) => {
    // Perform authentication logic here (e.g., API call, validation)
    // For simplicity, let's assume email and password are validated correctly
    if (email === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      navigate('/admin');
    } else {
      throw new Error('Authentication failed');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
