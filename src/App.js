// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';
import NotFound from './components/NotFound';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/admin/Dashboard'; // Example dashboard component
import AddClass from './components/admin/AddClass'; // Example add class/student component
import Statistics from './components/admin/Statistics'; // Example statistics component
import ViewData from './components/admin/ViewData';
import User from './components/User'
import UserLogin from './components/user/UserLogin';
import Quiz from './components/user/Quiz';
import TestCompleted from './components/user/TestCompleted';
import TestDetails from './components/admin/TestDetails';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/dashboard/addTest" element={<TestDetails />} />
            <Route path="/admin/add-class" element={<AddClass />} />
            <Route path="/admin/statistics" element={<Statistics />} />
            <Route path="/admin/view-data" element={<ViewData />} />
          </Route>
          <Route path="/user" element = {<User/>}>
            <Route path="/user/login" element={<UserLogin/>} />
            <Route path="/user/quiz" element={<Quiz/>} />
            <Route path="/user/test_completed" element = {<TestCompleted/>}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;