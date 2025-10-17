import React from "react";
import { motion } from "framer-motion";

import Image1 from "../../assets/serv_details/web/herowork.png";

const WebHero: React.FC = () => {
  return (
    <>
      {/* Left Side: Text */}
      <motion.div
        className="w-full lg:w-1/2 pr-0 lg:mt-20 my-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.h1
          className="text-[28px] md:text-[32px] lg:text-[52px] lg:leading-[70px] font-bold text-[#191818] text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Content That Stops
          <br />
          the <span className="text-[#02ec97]">Scroll and Sparks </span> Action
        </motion.h1>

        <p className="text-[16px] lg:text-[20px] leading-7 lg:leading-8 text-[#191818] mt-6 font-light lg:text-left text-justify">
          Your content gets lost in the noise. Posts disappear into feeds with
          zero engagement. Videos get skipped. Infographics get scrolled past.
          Meanwhile, competitors' content gets likes, shares, and comments. The
          difference? Creative design. We create visually stunning content that
          stops people mid-scroll, makes them want to engage, and compels them
          to take action. Beautiful, strategic, results-driven creative content.
        </p>

        {/* Mobile/Tablet Image Only */}
        <div className="block lg:hidden w-full mt-6">
          <img
            src={Image1}
            alt="Responsive Showcase"
            className="w-full md:w-10/12 mx-auto rounded-lg object-cover"
          />
        </div>

        <button
          className="w-fit mt-10 px-6 py-3 bg-primary hover:bg-primary/80 text-base lg:text-xl rounded-full cursor-pointer font-medium flex items-center justify-center ml-0"
          onClick={() => {
            const section = document.getElementById("WebRecentWork");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Explore Our Portfolio
        </button>
      </motion.div>

      {/* Right Side: Desktop Image */}
      <motion.div
        className="hidden lg:block w-full lg:w-1/2 relative mt-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="absolute top-1/2 right-4 lg:right-0 w-full max-w-[95%] rounded-lg overflow-hidden z-10 -translate-y-1/2">
          <img
            src={Image1}
            alt="Tall Team"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </>
  );
};

export default WebHero;
