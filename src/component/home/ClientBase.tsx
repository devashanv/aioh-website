import React from "react";
import Slider from "react-slick";

import Logo2 from "../../assets/img/logos/logo (2).webp";

import Aluviharaya from "../../assets/clients/aluviharaya.png";
import Nafco from "../../assets/clients/nafco.png";
import Muswenna from "../../assets/clients/muswenna.webp";
import EkhoElla from "../../assets/clients/EKHO_Ella.webp";
import EkhoLake from "../../assets/clients/EKHO_LakeHouse.webp";
import EkhoSafari from "../../assets/clients/EKHO_Safari.webp";
import EkhoSigiriya from "../../assets/clients/EKHO_Sigiriya.webp";
import EkhoSurf from "../../assets/clients/EKHO_Surf.webp";
import GoAhead from "../../assets/clients/Go ahead lanka logo new.webp";
import Pussllawa from "../../assets/clients/Heritage Pussellawa.webp";
import HotelSuisse from "../../assets/clients/Hotel-Suisse-color.webp";
import HotelQueens from "../../assets/clients/Queens Hotel Logo .webp";
import Arrogance from "../../assets/clients/arrogance.webp";
import CCL from "../../assets/clients/ccl.webp";
import Dinunda from "../../assets/clients/dinunda.webp";
import DoctoDO from "../../assets/clients/doctodo.webp";
import Ehelepola from "../../assets/clients/Ehelepola walauwwe logo black.png";
import Eikone from "../../assets/clients/eikone.webp";
import Limo from "../../assets/clients/limo copy.webp";
import LTT from "../../assets/clients/ltt logo.webp";
import Villa from "../../assets/clients/villa logo.webp";
import MSS from "../../assets/clients/mss.webp";
import NutriCrop from "../../assets/clients/nutri crop brown.webp";
import PanAsiaBank from "../../assets/clients/panasiabank.webp";
import QB from "../../assets/clients/qb.webp";
import Regency from "../../assets/clients/Regency Travel House - Primary vertical.webp";
import SeniorCargo from "../../assets/clients/senior-cargo.webp";
import TKC from "../../assets/clients/tkc logo.webp";
import Trillium from "../../assets/clients/trillium.webp";
import Wingcraft from "../../assets/clients/wingscraft gold logo.webp";
import Reviz from "../../assets/clients/reviz.png";

const ClientBase: React.FC = () => {
  const logoWrapperClass =
    "md:w-60 w-40 md:h-25 h-20 mt-6 bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl my-5 flex items-center justify-center";

  const settings = {
    infinite: true,
    slidesToShow: 6,
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
      {/* Desktop slideshow */}
      <section className="bg-white text-white rounded-xl h-full hidden lg:block">
        <section className="h-2/10 pt-5">
          <h1 className="text-[32px] md:text-[48px] lg:text-[52px] text-black font-medium mb-3 px-5 lg:px-0">
            Partners in Digital Success
          </h1>
          <p className="text-[18px] font-light mb-6 text-black">
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
                src={Muswenna}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={EkhoElla}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Logo2}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={HotelQueens}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-24 h-24"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Dinunda}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-32 h-32"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={EkhoSafari}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Limo}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-24 h-24"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={GoAhead}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Villa}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-24 h-24"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={EkhoLake}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={HotelSuisse}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-28 h-28"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={PanAsiaBank}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-16 h-16"
              />
            </div>
          </div>

          {/* Column 4 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={CCL}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={EkhoSigiriya}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={DoctoDO}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-24 h-24"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Ehelepola}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer black.png object-contain w-20 h-20"
              />
            </div>
          </div>

          {/* Column 5 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Eikone}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-24 h-24"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={EkhoSurf}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>

            <div className={logoWrapperClass}>
              <img
                src={LTT}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-24 h-24"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Pussllawa}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
          </div>

          {/* Column 6 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={MSS}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-16 h-16"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={NutriCrop}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Arrogance}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-36 h-36"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={QB}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
          </div>

          {/* Column 7 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Regency}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-30 h-30"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={SeniorCargo}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-16 h-16"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={TKC}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-30 h-30"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Trillium}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
          </div>

          {/* Column 8 */}
          <div className="h-full flex flex-col gap-10">
            <div className={logoWrapperClass}>
              <img
                src={Wingcraft}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-24 h-24"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Aluviharaya}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-32 h-32"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Nafco}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
            <div className={logoWrapperClass}>
              <img
                src={Reviz}
                alt=""
                className="filter grayscale hover:grayscale-0 hover:cursor-pointer object-contain w-20 h-20"
              />
            </div>
          </div>
        </Slider>
      </section>

      {/* Mobile slideshow */}
      <section className="bg-white text-white rounded-xl h-full block lg:hidden">
        <section className="h-2/10 pt-5">
          <h1 className="text-[32px] md:text-[48px] lg:text-[52px] text-black font-medium mb-3 px-5 lg:px-0">
            Partners in Digital Success
          </h1>
          <p className="text-[18px] font-light mb-6 text-black">
            We’ve teamed up with 50+ amazing clients and counting!
          </p>
        </section>

        <Slider
          infinite={true}
          slidesToShow={3}
          slidesToScroll={1}
          speed={1000}
          autoplay={true}
          autoplaySpeed={2000}
          dots={true}
          className="h-full w-full"
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
        >
          {/* Each column is a slide, vertical logos, responsive */}
          {[
            [EkhoElla, Logo2, Muswenna, Villa],
            [EkhoSafari, CCL, Eikone, GoAhead],
            [EkhoLake, HotelQueens, HotelSuisse, PanAsiaBank],
            [EkhoSigiriya, Dinunda, DoctoDO, Ehelepola],
            [EkhoSurf, Limo, LTT, Pussllawa],
            [MSS, NutriCrop, Arrogance, QB],
            [Regency, SeniorCargo, TKC, Trillium],
            [Wingcraft, Aluviharaya, Nafco, Reviz],
          ].map((col, colIdx) => (
            <div
              key={colIdx}
              className="flex flex-col gap-6 px-2 w-full min-w-0"
            >
              {col.map((logo, rowIdx) => (
                <div
                  key={rowIdx}
                  className="w-full flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt={`logo-mobile-${colIdx}-${rowIdx}`}
                    className="object-contain w-14 h-14 filter grayscale hover:grayscale-0 hover:cursor-pointer"
                  />
                </div>
              ))}
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default ClientBase;
