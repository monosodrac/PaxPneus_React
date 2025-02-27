import React from 'react';
import Routes from './Router';
import AuthProvider from './Contexts/authContexts';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/main.scss';

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Routes />
        <ToastContainer
          autoClose={5000}
        />
      </div>
    </AuthProvider>
  )
}