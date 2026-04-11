import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider } from 'react-router'




import { createBrowserRouter } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home/Home";
import Apps from "./Pages/Apps/Apps";
import Installation from "./Pages/Installation/Installation";
import Error from "./Pages/error/Error";

const route = createBrowserRouter([
    {
        path: '/',
        Component: <Layout />,
        children: [
            { index: true, Component: <Home /> },
            { path: '/Apps', Component: <Apps /> },
            { path: '/Installation', Component: <Installation /> }

        ],
        errorElement: <Error />


    }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
