import React from 'react';
import banner from '../../assets/hero.png'
const Banner = () => {
    return (
        <div className='flex flex-col md:flex-col  justify-center items-center w-11/12 mx-auto'>
            <div className='space-y-4 text-center'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:7xl text-[#001931]'>
                    We Build <br /><span className='text-[#9F62F2]'>Productive Apps</span>
                </h1>
                <p className='text-[#627382] md:leading-8 mb-5'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
            </div>
            <div className='md:mt-10'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;