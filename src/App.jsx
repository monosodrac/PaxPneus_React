import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify'

import Routes from './Router'

function App() {
  return (
    <div>
      <Routes />
      <ToastContainer
        autoClose={5000}
      />
    </div>
  )
}

export default App
