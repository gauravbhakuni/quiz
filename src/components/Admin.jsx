import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './admin/Header';
import Dashboard from './admin/Dashboard'; // Example dashboard component
import AddClass from './admin/AddClass'; // Example add class/student component
import Statistics from './admin/Statistics'; // Example statistics component
import ViewData from './admin/ViewData'; // Example view data component

const Admin = () => {
  return (
    <div className="flex">
      <Header />
      <div className="flex-1 bg-gray-200">
        <div className="h-full p-4">
          {/* Body content */}
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/add-class" element={<AddClass />} />
            <Route path="/admin/statistics" element={<Statistics />} />
            <Route path="/admin/view-data" element={<ViewData />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
