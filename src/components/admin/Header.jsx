import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="h-screen bg-gray-800 text-white w-48 flex flex-col justify-between">
      {/* Logo */}
      <div className="flex items-center justify-center py-4">
        <Link to="/">
          <img src="/path/to/your/logo.png" alt="Logo" className="h-12" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center space-y-4">
        <NavLink to="/admin/dashboard">Dashboard</NavLink>
        <NavLink to="/admin/add-class">Add Class/Student</NavLink>
        <NavLink to="/admin/statistics">Statistics</NavLink>
        <NavLink to="/admin/view-data">View Data</NavLink>
      </div>

      {/* Logout Button */}
      <div className="flex items-center justify-center py-4">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-center text-sm text-white hover:bg-gray-700 py-2 px-4 w-full"
      activeClassName="bg-gray-700"
    >
      {children}
    </Link>
  );
};

export default Header;