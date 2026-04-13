import React from 'react';

const StaticSection = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center py-8 px-5 md:py-20 md:px-10'>
            <div>
                <h1 className='text-white font-semibold text-xl md:text-5xl text-center mb-5 md:mb-10'>Trusted by Millions, Built for You</h1>
            </div>
            <div className='flex gap-10 md:gap-20'>
                <div className='font-extrabold text-2xl md:text-6xl text-white md:leading-16'>
                    <p>29.6M</p>
                </div>
                <div className='font-extrabold text-2xl md:text-6xl text-white md:leading-16'>
                    <p>906K</p>
                </div>
                <div className='font-extrabold text-2xl md:text-6xl text-white md:leading-16'>
                    <p>132+</p>
                </div>
            </div>
        </div>
    );
};

export default StaticSection;