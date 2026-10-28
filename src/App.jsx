import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import LoginPage from './Pages/Login/LoginPage';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [token])
  return token ? <Dashboard><Outlet /></Dashboard>:<LoginPage/>
}

export default App;
