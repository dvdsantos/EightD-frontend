import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route } from "react-router"

// Páginas
import Dashboard from './assets/pages/Dashboard/Dashboard.jsx'
import NovoRelatorio from './assets/pages/NovoRelatorio/NovoRelatorio.jsx'
import Login from './assets/pages/Login/Login.jsx'
import Relatorio from './assets/pages/Relatorio/Relatorio.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Dashboard",
    element: <Dashboard />
  },
  {
    path: "/NovoRelatorio",
    element: <NovoRelatorio />
  },
  {
    path: "/Relatorio",
    element: <Relatorio />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
