import React, { useEffect, useState } from 'react';
import AllCard from '../../ui/AllCard/AllCard';
import { NavLink } from 'react-router';
import { HashLoader } from 'react-spinners';
import UseAppsData from '../../useAppsData/UseAppsData';



const TrendingApps = () => {

    const {app, loading} = UseAppsData()
    
    return (
        <div className='mt-5 md:mt-20'>
            <div className='flex flex-col justify-center items-center space-y-3 md:space-y-5 mb-4 md:mb-10'>
                <h1 className='font-bold text-[#001931] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>
                    Trending Apps
                </h1>
                <p className='text-lg text-[#627382] text-center'>
                    Explore All Trending Apps on the Market developed by us

                </p>
            </div>
            {
                loading ? <div className='flex justify-center items-center h-screen'><HashLoader color='#632EE3' /></div> :
                    <div
                        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-11/12 mx-auto'>
                        {
                            app.slice(0, 8).map(card => <AllCard card={card} />)
                        }
                    </div>
            }
            <div className='flex justify-center items-center mt-10 mb-20'>
                <NavLink to={'/Apps'}>
                    <button
                        className='btn btn-xs sm:btn-sm md:btn-md bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none rounded-lg text-white font-bold py-4 px-10'>
                        Show All
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default TrendingApps;