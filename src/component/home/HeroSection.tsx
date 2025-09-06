import * as React from 'react';

import '../../styles/path.css'

import NavBar from '../common/NavBar';
import { gsap } from 'gsap';
import MotionPathPlugin from "gsap/MotionPathPlugin";
import HeroCardSlider from './HeroCardSlider';
import MobileSlider from './MobileSlider';

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
                className='relative flex flex-col items-center justify-center lg:pt-45 w-full h-[100dvh] lg:h-[100dvh] bg-[linear-gradient(125deg,_#011524_0%,_#002D5A_50%,_#010A12_100%)] rounded-xl'>

                {/* nav */}
                <div
                    className='absolute w-full top-0 pt-0'>
                    <NavBar currentPath="/" />
                </div>

                {/* content */}
                <div
                    className='flex flex-col items-center justify-center mt-0 h-2/3 lg:-mt-20 w-full'>
                    {/* title */}
                    <div
                        className='h-auto'>
                        <h1
                            className="gradient-text text-4xl lg:text-[90px] font-semibold mb-5">
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
                        className='h-80 w-full lg:block hidden'>
                        <HeroCardSlider />
                    </div>
                    <div
                        className='h-80 w-full lg:hidden block flex items-center justify-center'>
                        <MobileSlider />
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

