import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='space-y-4 text-center'>
                    <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:7xl text-[#001931]'>
                        We Build <br /><span className='text-[#9F62F2]'>Productive Apps</span>
                    </h1>
                    <p className='text-[#627382] leading-8'>
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;