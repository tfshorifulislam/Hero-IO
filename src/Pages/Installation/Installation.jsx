import React, { useContext } from 'react';
import { appContext } from '../../Context/InstalledAppsContext';
import InstallationCard from './InstallationCard';

const Installation = () => {

    const { install, setInstall } = useContext(appContext)
    console.log(install)

    return (
        <div>
            <div className='flex flex-col justify-center text-center'>
                <h1
                    className='font-bold text-5xl text-[#001931] mb-4'>
                    Your Installed Apps
                </h1>
                <p className='text-[#627382] md:leading-8 text-xl mb-5 md:mb-10'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div>
                <p className='text-2xl md:leading-8 text-[#001931] font-semibold '>
                    {install.length} Apps Found
                </p>
            </div>
            {
                install.map(i => <InstallationCard key={i.id} i={i} />)
            }
        </div>
    );
};

export default Installation;