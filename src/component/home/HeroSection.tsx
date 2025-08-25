import * as React from 'react';

import '../../styles/path.css'

import NavBar from '../common/NavBar';
import { gsap } from 'gsap';
import MotionPathPlugin from "gsap/MotionPathPlugin";
import TestProject from '../../assets/img/sample.webp'

gsap.registerPlugin(MotionPathPlugin);

const HeroSection: React.FC = () => {


    React.useEffect(() => {
        gsap.to("#rect", {
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
                autoRotate: true,
            },
            transformOrigin: "50% 50%",
            duration: 5,
            ease: "power1.inOut",
        });
    }, [])

    return (
        <>
            {/* header*/}
            <section
                className='relative flex flex-col items-center justify-center lg:pt-45 w-full h-[80dvh] lg:h-[100dvh] bg-[linear-gradient(125deg,_#011524_0%,_#002D5A_50%,_#010A12_100%)] rounded-xl'>

                {/* nav */}
                <div
                    className='absolute w-full top-0 pt-1'>
                    <NavBar currentPath="/" />
                </div>

                {/* content */}
                <div
                    className='flex flex-col items-center justify-center lg:-mt-20'>
                    {/* title */}
                    <div
                        className=''>
                        <h1
                            className="gradient-text text-4xl lg:text-[90px] font-semibold">
                            Live. Love. Laugh.
                        </h1>
                        <p
                            className='text-white/80 text-lg px-5 lg:mt-0 mt-5 lg:px-0 lg:text-2xl font-thin'>
                            Delivering <span className='text-primary'>Digital Solutions</span> with Proven Expertise.
                        </p>
                    </div>

                    {/* project slider */}
                    {/* <div>
                        <ProjectCardSlider 
                            ourProjects={companyProject}
                            visibleCount={3}
                            duration={12} />
                    </div> */}

                    <div
                        className='bg-red-300 h-80 w-full py-5'>
                        <svg className='bg-red-400 h-1/2 pt-10 flex items-center justify-center' id="svg">
                            <path
                                className='bg-red-800'
                                fill="none"
                                stroke="white" 
                                id="path"
                                transform="scale(0.7 , 0.6)"
                                d="M0.56706 127.506C456.87 -40.0537 678.07 -39.4942 1089.57 122.506" />
                            <g id="one" >
                                <rect width="85" height="30" fill="dodgerblue" className='z-10 hidden lg:block bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg -rotate-x-13 -rotate-y-18 px-3 pt-8 pb-3'>
                                    <img src={TestProject} alt="" className='w-full h-full object-fit rounded-xl' />
                                </rect>
                                
                            </g>

                            <div id="one" className='z-10 hidden lg:block bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg -rotate-x-13 -rotate-y-18 px-3 pt-8 pb-3'>
                                        
                                </div>
                        </svg>
                    </div>

                    {/* bottom data */}
                    <div
                        className='flex gap-5 items-center justify-center lg:w-1/2'>
                        <div
                            className='flex items-end justify-center'>
                            <p
                                className='text-xl lg:text-3xl text-white font-medium'>10</p>
                            <p
                                className='text-primary'>+</p>
                            <p
                                className='text-white font-thin ml-1'>Years</p>
                        </div>

                        <p className='text-xl lg:text-3xl text-white font-thin'>|</p>

                        <div
                            className='flex items-end justify-center'>
                            <p
                                className='text-xl lg:text-3xl text-white font-medium'>250</p>
                            <p
                                className='text-primary'>+</p>
                            <p
                                className='text-white font-thin  ml-1'>Projects</p>
                        </div>

                        <p className='text-3xl text-white font-thin'>|</p>

                        <div
                            className='flex items-end justify-center'>
                            <p
                                className='text-xl lg:text-3xl text-white font-medium'>07</p>
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

