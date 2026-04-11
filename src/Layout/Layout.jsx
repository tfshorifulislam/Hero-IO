import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <div className='w-11/12 mx-auto max-w-480'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;