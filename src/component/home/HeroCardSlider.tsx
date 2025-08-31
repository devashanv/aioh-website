import React, { useEffect } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import TestProject from '../../assets/img/test-project.webp'

gsap.registerPlugin(MotionPathPlugin);

const HeroProjectSlider: React.FC = () => {
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
          start: 1 + i / slides.length, // start from right
          end: 0 + i / slides.length,   // move to left
        },
      });
    });
  }, []);

  return (
    <section className="relative w-full  h-[300px] overflow-hidden flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="absolute w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        <path
          id="archPath"
          d="M 0 90 Q 50 10 100 90"  
          fill="none"
        />
      </svg>

      {/* Slides */}
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          className="slide w-50 h-28 text-white flex items-center justify-center rounded-xl shadow-lg text-lg font-bold absolute"
        >
          <div className='z-10 hidden lg:block bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg -rotate-x-13 -rotate-y-18 px-3 pt-8 pb-3'>
            <img src={TestProject} alt="" className='w-full h-full object-fit rounded-xl' />
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroProjectSlider;
