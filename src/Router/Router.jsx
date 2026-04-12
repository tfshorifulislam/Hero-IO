import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Layout from "../Layout/Layout";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppsDetails/AppDetails";
import Dashboard from "../Pages/dashboard/Dashboard";

export const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: '/Apps', element: <Apps /> },
            { path: '/Apps/:id', element: <AppDetails /> },
            { path: 'Installation', element: <Installation /> },
            { path: 'dashboard', element: <Dashboard /> }
        ],
        errorElement: <Error />


    },


])
