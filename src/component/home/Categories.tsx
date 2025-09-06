import React from 'react'
import { Link } from 'react-router-dom'

import MarketingImg from '../../assets/img/sample/marketing.png'
import ExploreIcon from '../../assets/img/icons/project-explore.svg'

const Categories: React.FC = () => {
    return (
        <>
            <section className='w-11/12 mx-auto h-full'>
                <section
                    className='h-auto lg:h-1/4 lg:mb-0 mb-10'>
                    <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium lg:mb-3 text-center lg:text-left lg:w-1/2">
                        Crafted Expertise Across Every Discipline
                    </h1>
                </section>

                <section
                    className='w-full h-3/4 flex lg:flex-row flex-col gap-8'>
                    <section
                        className='w-full lg:w-1/3 h-full flex flex-col gap-8'>
                        <section
                            className='bg-white h-4/12 rounded-xl p-5 text-left flex flex-col gap-3'>
                            <h2 className='font-medium text-2xl'>Marketing</h2>
                            <p className='font-thin'>We build meaningful connections. Our data-driven strategies put your brand in front of the right people, at the right time, across the right channels.</p>
                        </section>

                        <section
                            className='relative bg-red-400 h-8/12 rounded-xl w-full rounded-xl'>
                            {/* gradient */}
                            <div className="absolute bg-gradient-to-b from-[#078BD6]/44 to-[#D9D9D9]/0 h-64 w-full rounded-xl"></div>

                            <img src={MarketingImg} alt="" className='w-full h-full object-cover rounded-xl' />
                            <Link to='/Marketing'>
                            <button
                                className='absolute top-5 right-5 bg-primary w-12 h-12 rounded-full hover:cursor-pointer hover:bg-primary/85'>
                                <img src={ExploreIcon} alt="" />
                            </button>
                            </Link>
                        </section>
                    </section>

                    <section
                        className='w-full lg:w-1/3 h-full flex flex-col-reverse lg:flex-col gap-8'>
                        <section
                            className='relative h-8/12 rounded-xl w-full rounded-xl'>
                            {/* gradient */}
                            <div className="absolute bg-gradient-to-b from-[#078BD6]/44 to-[#D9D9D9]/0 h-64 w-full rounded-xl"></div>

                            <img src={MarketingImg} alt="" className='w-full h-full object-cover rounded-xl' />
                            <Link to='/Technology'><button
                                className='absolute top-5 right-5 bg-primary w-12 h-12 rounded-full hover:cursor-pointer hover:bg-primary/85'>
                                <img src={ExploreIcon} alt="" />
                            </button>
                            </Link>
                        </section>

                        <section
                            className='bg-white h-4/12 rounded-xl p-5 text-left flex flex-col gap-3'>
                            <h2 className='font-medium text-2xl'>Technology</h2>
                            <p className='font-thin'>We engineer solutions that turn your ideas into secure, high-performance digital experiences. Let technology become your biggest asset.</p>
                        </section>
                    </section>

                    <section
                        className='w-full lg:w-1/3 h-full flex flex-col gap-8'>
                        <section
                            className='bg-white h-4/12 rounded-xl p-5 text-left flex flex-col gap-3'>
                            <h2 className='font-medium text-2xl'>Design</h2>
                            <p className='font-thin'>Great design is more than aesthetics it’s how you make your audience feel.  We craft intuitive, user focused visuals that elevate your brand.</p>
                        </section>

                        <section
                            className='relative h-8/12 rounded-xl w-full rounded-xl'>
                            {/* gradient */}
                            <div className="absolute bg-gradient-to-b from-[#078BD6]/44 to-[#D9D9D9]/0 h-64 w-full rounded-xl"></div>

                            <img src={MarketingImg} alt="" className='w-full h-full object-cover rounded-xl' />
                            <Link to='/Design'><button
                                className='absolute top-5 right-5 bg-primary w-12 h-12 rounded-full hover:cursor-pointer hover:bg-primary/85'>
                                <img src={ExploreIcon} alt="" />
                            </button>
                            </Link>
                        </section>
                    </section>

                </section>
            </section>
        </>
    )
}

export default Categories