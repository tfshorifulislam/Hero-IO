import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';

const Layout = () => {
    return (
        <div className='max-w-480'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;