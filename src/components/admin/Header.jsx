import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { RiDashboardLine } from "react-icons/ri";
import { BsFillFileBarGraphFill } from "react-icons/bs";
import { MdLogout, MdOutlineAddBox } from "react-icons/md";
import { CiViewTable } from "react-icons/ci";

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const NavLink = ({ to, icon: Icon, children }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        className={` flex items-center justify-start text-lg  text-white py-2 px-4 w-56 rounded-3xl h-12 ${
          isActive ? 'bg-orange-500 font-bold' : ''
        }`}
      >
        {Icon && <Icon className="mr-2 text-xl" />}
        {children}
      </Link>
    );
  };

  return (
    <div className="bg-gray-800 text-white w-72 flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center py-4 m-8">
        <h1 className="text-3xl font-bold italic">Quizzine.</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center space-y-4 text-xl">
        <NavLink to="/admin/dashboard" icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink to="/admin/add-class" icon={MdOutlineAddBox}>Add Class/Student</NavLink>
        <NavLink to="/admin/statistics" icon={BsFillFileBarGraphFill}>Statistics</NavLink>
        <NavLink to="/admin/view-data" icon={CiViewTable}>View Data</NavLink>
      </div>

      {/* Logout Button */}
      <div className="flex items-center justify-center py-4 mt-44">
        <button
          onClick={handleLogout}
          className="w-40 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-3xl flex items-center space-x-2 focus:outline-none focus:shadow-outline"
        >
          <MdLogout className="text-xl" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Header;