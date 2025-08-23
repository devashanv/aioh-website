import React from 'react'

import GrowthIcon from '../../assets/img/icons/Increase.svg'
import RevenueIcon from '../../assets/img/icons/Revenue.svg'
import ArrowIcon from '../../assets/img/icons/arrow.svg'
import TestProject from '../../assets/img/test-project.webp'
import { FaRegDotCircle } from "react-icons/fa";

const SuccessHistory: React.FC = () => {
    return (
        <>
            <section
                className='h-full flex flex-col gap-3'>
                {/* header */}
                <section
                    className='h-2/10'>
                    <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium mb-3">
                        Our Work, Your Growth
                    </h1>
                    <p className="text-[18px] font-light mb-6">
                        Showcasing impactful digital solutions that drive real business results.
                    </p>
                </section>

                {/* content */}
                <section
                    className='h-8/10'>
                    {/* precentage section*/}
                    <div
                        className='flex gap-5 h-full'>
                        <div
                            className='bg-gradient-to-t from-[#010A12] to-[#002D5A] w-3/12 rounded-xl flex flex-col items-center justify-center gap-6'>
                            <div>
                                <p className='text-[96px] font-bold text-white'>156<span className='text-primary text-[70px] ml-3 font-medium'>%</span></p>
                                <div
                                    className='w-2/3 flex w-full text-white items-center justify-between mx-auto'>
                                    <p className='text-left text-xl'>
                                        Increase Business <br />
                                        <span className='text-primary'>Growth</span>
                                    </p>
                                    <img src={GrowthIcon} alt="" />
                                </div>
                            </div>

                            <div>
                                <p className='text-[96px] font-bold text-white'>125<span className='text-primary text-[70px] ml-3 font-medium'>%</span></p>
                                <div
                                    className='w-2/3 flex w-full text-white items-center justify-between mx-auto'>
                                    <p className='text-left text-xl'>
                                        Increase Total <br />
                                        <span className='text-primary'>Revenue</span>
                                    </p>
                                    <img src={RevenueIcon} alt="" />
                                </div>
                            </div>
                        </div>

                        {/* description sec */}
                        <div
                            className='bg-gradient-to-t text-white from-[#010A12] to-[#002D5A] w-9/12 rounded-xl p-10'>

                            {/* intro */}
                            <div
                                className='h-1/2 flex'>
                                <div
                                    className='w-2/3 text-left'>
                                    <p
                                        className='text-2xl font-light'>Rental Car Website Development</p>
                                    <p
                                        className='mt-3'>- Kandy Rental Car -</p>
                                    <p className='mt-7 leading-8 text-justify pr-10 font-thin text-white/60'>Designed and developed a responsive, user-friendly website for a car rental service, featuring real-time vehicle availability, booking functionality, and location-based search to enhance customer experience and streamline operations.</p>
                                </div>

                                <div
                                    className='w-1/3 relative p-5'>
                                    <div className='absolute w-9/12 h-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg -rotate-x-13 z-0 -rotate-y-18 mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>

                                    <div className='z-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg -rotate-x-13 -rotate-y-18 px-3 pt-8 pb-3'>
                                        <img src={TestProject} alt="" className='w-full h-full object-fit rounded-xl' />
                                    </div>
                                </div>
                            </div>

                            {/* challenge sec */}
                            <div
                                className='flex w-full h-1/2'>
                                <div
                                    className='text-left w-2/3 pt-5'>
                                    <p className='text-lg mb-3'>Challeges, we solved</p>
                                    <div>
                                        <ul className='font-thin text-white/60 flex flex-col gap-3'>
                                            <li className='flex items-center gap-2 justify-start'>
                                                <FaRegDotCircle style={{ width: '16px', }} className='text-[#078BD6]' />
                                                <p>Simplifying a complicated design process</p>
                                            </li>
                                            <li className='flex items-center gap-2 justify-start'>
                                                <FaRegDotCircle style={{ width: '16px', }} className='text-[#078BD6]' />
                                                <p>Giving consumers a seamless digital experience when designing their car</p>
                                            </li>
                                            <li className='flex items-center gap-2 justify-start'>
                                                <FaRegDotCircle style={{ width: '16px', }} className='text-[#078BD6]' />
                                                <p>Real time experience of designing your car</p>
                                            </li>
                                            <li className='flex items-center gap-2 justify-start'>
                                                <FaRegDotCircle style={{ width: '16px', }} className='text-[#078BD6]' />
                                                <p>A comprehensive back-end platform that allowed real time updates</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* slider button */}
                                <div
                                    className='w-1/3 flex items-end justify-end pr-10 gap-2'>
                                    <button
                                        className='bg-[#01213A] w-13 h-13 rounded-full flex items-center justify-center hover:bg-[#01213A]/80 hover:cursor-pointer'>
                                        <img src={ArrowIcon} alt="" />
                                    </button>

                                    <button
                                        className='bg-primary w-13 h-13 rounded-full flex items-center justify-center hover:bg-primary/80 hover:cursor-pointer'>
                                        <img src={ArrowIcon} alt="" className='transform scale-x-[-1]' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}


export default SuccessHistory