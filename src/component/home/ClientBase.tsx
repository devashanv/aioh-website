import React, { Component, useState } from "react";
import Slider from "react-slick";

import LogoCCL from '../../assets/img/icons/ccl.svg'
import LogoFly from '../../assets/img/icons/fly.svg'
import LogoLtt from '../../assets/img/icons/ltt.svg'
import LogoHari from '../../assets/img/icons/hari.svg'


const ClientBase: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState(0);

   const settings = {
    infinite: true,
    slidesToShow: 5,            // desktop (unchanged)
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    // IMPORTANT: no centerMode, no centerPadding, no className: "center"
    responsive: [
      {
        breakpoint: 1024,       // ≤ 1024px → tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,        // ≤ 640px → mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


    return (
        <>
            <section
                className='bg-gradient-to-b text-white from-[#010A12] to-[#002D5A] rounded-xl h-full'>
                <section
                    className='h-2/10 pt-5'>
                    <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium mb-3">
                        Partners in Digital Success
                    </h1>
                    <p className="text-[18px] font-light mb-6">
                        We’ve teamed up with 50+ amazing clients and counting!
                    </p>
                </section>

                {/* <div className="slider-container">
                    <Slider {...settings}>
                        {logos.map((logo, idx) => (
                            <div key={idx} className="px-4 flex flex-col bg-red-400">
                                <div className="flex flex-col items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 h-32">
                                    <img
                                        src={logo}
                                        alt={`logo-${idx}`}
                                        className="max-h-20 object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div> */}

                <div className="slider-containerh-8/10">
                    <Slider {...settings}
                        className="h-full flex">
                        <div className="h-full flex flex-col gap-10">
                            <div 
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoCCL} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoFly} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoHari} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoLtt} alt="" className="filter grayscale" />
                            </div>
                        </div> 

                         <div className="h-full flex flex-col gap-10">
                            <div 
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoCCL} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoFly} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoHari} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoLtt} alt="" className="filter grayscale" />
                            </div>
                        </div> 

                         <div className="h-full flex flex-col gap-10">
                            <div 
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoCCL} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoFly} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoHari} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoLtt} alt="" className="filter grayscale" />
                            </div>
                        </div> 

                         <div className="h-full flex flex-col gap-10">
                            <div 
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoCCL} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoFly} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoHari} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoLtt} alt="" className="filter grayscale" />
                            </div>
                        </div> 

                         <div className="h-full flex flex-col gap-10">
                            <div 
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoCCL} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoFly} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoHari} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoLtt} alt="" className="filter grayscale" />
                            </div>
                        </div> 

                         <div className="h-full flex flex-col gap-10">
                            <div 
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoCCL} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoFly} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoHari} alt="" className="filter grayscale" />
                            </div>
                            <div
                                className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center">
                                <img src={LogoLtt} alt="" className="filter grayscale" />
                            </div>
                        </div>               
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default ClientBase