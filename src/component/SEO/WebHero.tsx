import React from "react";
import { motion } from "framer-motion";

import Image1 from "../../assets/serv_details/web/SEO.png";

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
          {/* Enhance Online Presence */}
          {/* <br />
          <span className="text-[#02ec97]">Through</span> SEO */}
          Stop Being Invisible
          <br />
          on<span className="text-[#02ec97]"> Google</span>
        </motion.h1>

        <p className="text-[16px] lg:text-[20px] leading-7 lg:leading-8 text-[#191818] mt-6 font-light lg:text-left text-justify">
          You have a great business and a decent website but when people search
          for what you offer, they find your competitors instead. Maybe you're
          on page 3 of Google (where nobody looks), or you're not showing up at
          all. You're losing customers every single day to businesses that
          aren't even better than you-they just rank higher. We fix that. We get
          you found by people actively searching for exactly what you sell.
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
