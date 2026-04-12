import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
    return (
        <div className='max-w-480 mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />



            <ToastContainer />
        </div>
    );
};

export default Layout;