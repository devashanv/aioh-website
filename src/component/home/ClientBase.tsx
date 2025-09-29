import React from "react";
import Slider from "react-slick";

import Logo1 from "../../assets/img/logos/logo (1).webp";
import Logo2 from "../../assets/img/logos/logo (2).webp";
import Logo3 from "../../assets/img/logos/logo (3).webp";
import Logo4 from "../../assets/img/logos/logo (4).webp";
import Logo5 from "../../assets/img/logos/logo (5).webp";
import Logo6 from "../../assets/img/logos/logo (6).webp";
import Logo7 from "../../assets/img/logos/logo (7).webp";
import Logo8 from "../../assets/img/logos/logo (8).webp";
import Logo9 from "../../assets/img/logos/logo (9).webp";
import Logo10 from "../../assets/img/logos/logo (10).webp";
import Logo11 from "../../assets/img/logos/logo (11).webp";
import Logo12 from "../../assets/img/logos/logo (12).webp";
import Logo13 from "../../assets/img/logos/logo (13).webp";
import Logo14 from "../../assets/img/logos/logo (14).webp";
import Logo15 from "../../assets/img/logos/logo (15).webp";
import Logo16 from "../../assets/img/logos/logo (16).webp";
import Logo17 from "../../assets/img/logos/logo (17).webp";
import Logo18 from "../../assets/img/logos/logo (18).webp";
import Logo19 from "../../assets/img/logos/logo (19).webp";
import Logo20 from "../../assets/img/logos/logo (20).webp";
import Logo21 from "../../assets/img/logos/logo (21).webp";
import Logo22 from "../../assets/img/logos/logo (22).webp";
import Logo23 from "../../assets/img/logos/logo (23).webp";
import Logo24 from "../../assets/img/logos/logo (24).webp";
import Logo25 from "../../assets/img/logos/logo (25).webp";
import Logo26 from "../../assets/img/logos/logo (26).webp";
import Logo27 from "../../assets/img/logos/logo (27).webp";
import Logo28 from "../../assets/img/logos/logo (28).webp";
import Logo29 from "../../assets/img/logos/logo (29).webp";
import Logo30 from "../../assets/img/logos/logo (30).webp";
import Logo31 from "../../assets/img/logos/logo (31).webp";
import Logo32 from "../../assets/img/logos/logo (32).webp";

const ClientBase: React.FC = () => {
  const logoWrapperClass =
    "md:w-60 w-40 md:h-25 h-20 mt-6 bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center";

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
        },
      },
      {
        breakpoint: 789,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 2000,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="bg-gradient-to-b text-white from-[#010A12] to-[#002D5A] rounded-xl h-full">
        <section className="h-2/10 pt-5">
          <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium mb-3 px-5 lg:px-0">
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

        <Slider {...settings} className="lg:h-auto h-full flex">
          {/* Column 1 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Logo1}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo2}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo3}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo4}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Logo5}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo6}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo7}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo8}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Logo9}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo10}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo11}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo12}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
          </div>

          {/* Column 4 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Logo13}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo14}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo15}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo16}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
          </div>

          {/* Column 5 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Logo17}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo18}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo19}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo20}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
          </div>

          {/* Column 6 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Logo21}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo22}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo23}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo24}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
          </div>

          {/* Column 7 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Logo25}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo26}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo27}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo28}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
          </div>

          {/* Column 8 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Logo29}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo30}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo31}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo32}
                alt=""
                className="filter grayscale object-contain max-w-[80%] max-h-[80%]"
              />
            </div>
          </div>
        </Slider>
      </section>
    </>
  );
};

export default ClientBase;
