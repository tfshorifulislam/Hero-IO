import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Home'
import Apps from './Pages/Apps/Apps.jsx'
import Installation from './Pages/Installation/Installation.jsx'
import Error from './Pages/error/Error.jsx'



const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'Apps', element: <Apps /> },
      { path: 'Installation', element: <Installation /> }
    ],
    errorElement: <Error />


  },


])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
