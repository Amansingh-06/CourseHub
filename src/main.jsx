import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer/>
    <App />
  </>,
)