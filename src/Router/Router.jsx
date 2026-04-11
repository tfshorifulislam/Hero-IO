import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Layout from "../Layout/Layout";
import Installation from "../Pages/Installation/Installation";

export const route = createBrowserRouter([
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
