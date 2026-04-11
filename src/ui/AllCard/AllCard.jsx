import React from 'react';
import { HiDownload } from "react-icons/hi";
import { IoStarSharp } from "react-icons/io5";

const AllCard = ({ card }) => {
    return (
        <div>
            <div className="card bg-base-200 cardAnimate shadow-sm cursor-pointer ">
                <figure className='flex justify-center items-center px-5 py-30'>
                    <img className='max-w-48'
                        src={card.image}
                        alt="Shoes" />
                </figure>

            </div>
            <div>
                <h2 className='line-clamp-1 text-[#001931] font-medium text-xl mb-5 mt-3'>
                    {card.title}
                </h2>
                <div className='flex justify-between items-center'>
                    <p className=' text-[#00D390] font-medium flex items-center gap-2 text-lg md:text-xl'>
                        <HiDownload /> {card.downloads}
                    </p>
                    <p className='text-[#FF8811] font-medium flex items-center gap-2 text-lg md:text-xl'>
                        <IoStarSharp /> {card.ratingAvg}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AllCard;