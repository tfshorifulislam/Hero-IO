import React, { useContext } from 'react';
import { HashLoader } from 'react-spinners';
import { FaDownload, FaStar } from 'react-icons/fa';
import { MdReviews } from 'react-icons/md';
import { appContext } from '../../Context/InstalledAppsContext';

const AppsDetailsCard = ({ expectedApp }) => {


    const { install, setInstall } = useContext(appContext)
    

    const handleInstall = () => {
        
        setInstall([...install, expectedApp])
    }

    return (
        <div className='mb-10 w-11/12 mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-sm pt-7">
                <figure>
                    <img
                        className='sm:w-90 p-10'
                        src={expectedApp.image}
                        alt={expectedApp.title} />
                </figure>
                <div className="flex-auto">
                    <h2 className="card-title mb-2">{expectedApp.title}</h2>
                    <p className='text-[#627382] leading-8 mb-8'>
                        Developed by
                        <span className='text-[#632EE3] font-bold ml-4'>
                            {expectedApp.companyName}
                        </span>
                    </p>
                    <div className='border-t border-[#00193130]'></div>
                    <div className='flex  md:gap-20 pb-10 px-3 flex-col md:flex-row'>
                        <div className='flex flex-col space-y-2 justify-start mt-8'>
                            <FaDownload className='text-2xl text-[#00827A]' />
                            <p className='md:leading-4 text-[#001931]'>Downloads</p>
                            <p className='text-[#001931] font-extrabold text-4xl md:leading-10'>{expectedApp.downloads}</p>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start mt-8'>
                            <FaStar className='text-2xl text-[#FF8811]' />
                            <p className='md:leading-4 text-[#001931]'>Average Ratings</p>
                            <p className='text-[#001931] font-extrabold text-4xl md:leading-10'>{expectedApp.ratingAvg}</p>
                        </div>
                        <div className='flex flex-col space-y-2 justify-start mt-8'>
                            <MdReviews className='text-2xl text-[#632EE3]' />
                            <p className='md:leading-4 text-[#001931]'>Total Reviews</p>
                            <p className='text-[#001931] font-extrabold text-4xl md:leading-10'>{expectedApp.reviews}</p>
                        </div>

                    </div>
                    <div className='px-3 pb-5'>
                        <button
                            onClick={() => handleInstall()}
                            className='btn border-none shadow-none  font-semibold text-white md:text-lg bg-[#00D390]'>Install Now
                            <span
                                className='ml-2'>({expectedApp.size} MB)
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className='border-b border-[#00193120] my-10'></div>
            <div>
                <p
                    className='text-[#001931] font-semibold text-xl md:leading-8 mb-6'>
                    Ratings
                </p>


            </div>
            <div className='border-b border-[#00193120] my-10'></div>
            <div className='space-y-3 md:max-w-[90%]'>
                <p className='font-semibold text-[#001931] text-xl'>Description</p>
                <span className='text-[#627382] md: leading-8 text-lg'>
                    {expectedApp.description}
                </span>
            </div>

        </div>
    );
};

export default AppsDetailsCard;