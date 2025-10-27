import React, { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import Regency from "../../assets/img/herohome/regency.webp";
import Winchester from "../../assets/img/herohome/winchester.webp";
import Ehelepola from "../../assets/img/herohome/ehelepola.png";
import TestProject3 from "../../assets/img/herohome/test-project1.webp";
import TestProject5 from "../../assets/img/herohome/test-project2.webp";
import TestProject6 from "../../assets/img/herohome/test-project3.webp";

import { MdOutlineArrowOutward } from "react-icons/md";

gsap.registerPlugin(MotionPathPlugin);

const HeroProjectSlider: React.FC = () => {
  const images = [
    Regency,
    TestProject3,
    Winchester,
    TestProject5,
    Ehelepola,
    TestProject6,
  ];

  useEffect(() => {
    const slides = gsap.utils.toArray(".slide") as HTMLElement[];

    slides.forEach((slide, i) => {
      gsap.to(slide, {
        duration: 20,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: "#archPath",
          align: "#archPath",
          alignOrigin: [0.5, 0.5],
          start: 1 + i / slides.length,
          end: 0 + i / slides.length,
        },
      });
    });
  }, []);

  return (
    <section className="relative w-full h-[300px] overflow-hidden flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="absolute w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        <path id="archPath" d="M 0 90 Q 50 10 100 90" fill="none" />
      </svg>

      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className="slide w-50 h-28 text-white flex items-center justify-center rounded-xl shadow-lg text-lg font-bold absolute"
        >
          <div className="z-10 hidden lg:block bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg -rotate-x-13 -rotate-y-18 px-3 pt-3 hover:cursor-pointer">
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />

            <button>
              <MdOutlineArrowOutward
                style={{ width: "25px", height: "25px" }}
                className="hidden"
              />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroProjectSlider;
