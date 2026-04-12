import React from 'react';
import UseAppsData from '../../useAppsData/UseAppsData';
import { HashLoader } from 'react-spinners';
import AllCard from '../../ui/AllCard/AllCard';
import Loading from '../../ui/Loding/Loading';

const Apps = () => {
    const { app, loading } = UseAppsData()
    return (
        <div className='mt-5 md:mt-20 mb-10 md:mb-20'>
            <div className='flex flex-col justify-center items-center space-y-3 md:space-y-5 mb-4 md:mb-10'>
                <h1 className='font-bold text-[#001931] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center'>
                    Trending Apps
                </h1>
                <p className='text-lg text-[#627382] text-center'>
                    Explore All Trending Apps on the Market developed by us

                </p>
            </div>
            {
                loading ? <Loading /> :
                    <div
                        className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-11/12 mx-auto'>
                        {
                            app.map(card => <AllCard key={card.id} card={card} />)
                        }
                    </div>
            }
        </div>
    );
};

export default Apps;