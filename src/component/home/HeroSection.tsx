import * as React from 'react';

import NavBar from '../common/NavBar';


const HeroSection: React.FC = () => {
    return (
        <>
            {/* header*/}
            <section
                className='relative flex flex-col items-center justify-center w-full h-[100dvh] bg-[linear-gradient(125deg,_#011524_0%,_#002D5A_50%,_#010A12_100%)] rounded-xl'>
                
                {/* nav */}
                <div 
                    className='absolute w-full top-0 pt-1'>
                    <NavBar currentPath="/" />
                </div>

                {/* content */}
                <div 
                    className='flex flex-col items-center justify-center -mt-20'>
                    {/* title */}
                    <div
                        className=''>
                        <h1
                            className="gradient-text text-[90px] font-medium">
                            Live. Love. Laugh.
                        </h1>
                        <p 
                            className='text-white/80 text-2xl font-thin'>
                            Delivering <span className='text-primary'>Digital Solutions</span> with Proven Expertise.
                        </p>
                    </div>

                    {/* project slider */}
                    <div>
                        
                    </div>

                    {/* bottom data */}
                    <div 
                        className='flex gap-5 items-center justify-center w-1/2'>
                        <div 
                        className='flex items-end justify-center'>
                            <p
                            className='text-3xl text-white font-medium'>10</p>
                            <p 
                            className='text-primary'>+</p>
                            <p
                            className='text-white font-thin ml-1'>Years</p>
                        </div>

                        <p className='text-3xl text-white font-thin'>|</p>

                        <div 
                        className='flex items-end justify-center'>
                            <p
                            className='text-3xl text-white font-medium'>250</p>
                            <p 
                            className='text-primary'>+</p>
                            <p
                            className='text-white font-thin  ml-1'>Projects</p>
                        </div>
                        
                        <p className='text-3xl text-white font-thin'>|</p>

                        <div 
                        className='flex items-end justify-center'>
                            <p
                            className='text-3xl text-white font-medium'>07</p>
                            <p 
                            className='text-primary'>+</p>
                            <p
                            className='text-white font-thin  ml-1'>Contries</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HeroSection;

