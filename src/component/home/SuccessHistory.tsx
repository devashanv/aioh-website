import React from 'react'

import GrowthIcon from '../../assets/img/icons/Increase.svg'
import RevenueIcon from '../../assets/img/icons/Revenue.svg'

const SuccessHistory: React.FC = () => {
    return (
        <>
            <section
                className='bg-red-300 h-full flex flex-col gap-3'>
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
                            className='bg-gradient-to-t from-[#010A12] to-[#01213A] w-3/12 rounded-xl flex flex-col items-center justify-center gap-6'>
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

                        {/* description section */}
                        <div
                            className='bg-gradient-to-t from-[#010A12] to-[#01213A] w-9/12 rounded-xl'>
                            
                            {/* intro */}
                            <div>
                                <div>
                                    <p>Title</p>
                                </div>
                            </div>

                            {/* challenge */}
                            <div>

                            </div>
                        </div>
                    </div>

                    {/* projects */}
                    <div>

                    </div>

                </section>
            </section>
        </>
    )
}


export default SuccessHistory