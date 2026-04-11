import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className='max-w-480'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;