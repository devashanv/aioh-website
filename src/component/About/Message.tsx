import React from "react";
import quotesSvg from "../../assets/about/quotes.svg";
import gradientBg from "../../assets/about/gredientbg.png";
import whiteBg from "../../assets/about/whitebg.png";

import { motion } from "framer-motion";

import ceo from '../../assets/about/CEO.png'
import coo from '../../assets/about/COO.png'
import cto from '../../assets/about/CTO.png'

const directorData = [
  {
    id: 1,
    quote:
      "We believe the future belongs to those with vision and courage. Through technology, creativity, and strategy, we empower businesses and communities to achieve purposeful growth and build a smarter, brighter future together.",
    role: "Founder & CEO",
    image: ceo,
  },
  {
    id: 2,
    quote:
      "We think like our customers, understand their stories, and turn insights into action that delivers real results. We are not here to give the best solution, what we deliver is the most profitable one.",
    role: "COO",
    image: coo,
  },
  {
    id: 3,
    quote:
      "We are committed to design technology that drives growth and innovation. Our mission is to turn challenges into smart, future-ready solutions that create real impact and help businesses grow stronger through a powerful digital presence.",
    role: "CTO",
    image: cto,
  },
];

const Message: React.FC = () => {
  return (
    <div className="w-full">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-[28px] md:text-[48px] lg:text-[52px] font-bold text-black">
          Our Leadership Insights
        </h2>
        <p className="text-[18px] font-light text-black mt-2 max-w-3xl mx-auto">
          Insights from our leadership—highlighting the values and vision
          guiding our path.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col lg:flex-row gap-40 lg:gap-10 justify-center items-center mt-40"
      >
        {directorData.map((director) => (
          <div
            key={director.id}
            className="relative w-full md:w-3/5 lg:w-1/3 flex justify-center scale-[0.95] md:scale-100 max-w-xs md:max-w-none"
          >
            {/* Background Gradient */}
            <img
              src={gradientBg}
              alt="Gradient Background"
              className="absolute z-0"
              style={{
                top: 0,
                left: 0,
                width: "auto",
                height: "auto",
                maxWidth: "80%",
              }}
            />

            {/* Man Image */}
            <img
              src={director.image}
              alt="Director"
              className="absolute z-[5] w-[260px] h-auto object-contain"
              style={{
                top: "-140px",
                left: "60px",
              }}
            />

            {/* Card with Quote */}
            <div className="relative z-10 w-full ml-[60px] mt-24">
              <div className="relative md:w-[95%] w-full">
                <img
                  src={whiteBg}
                  alt="Card Background"
                  className="w-full h-auto object-contain"
                />
                {/* Content on top of white background */}
                <div className="absolute inset-0 px-4 pb-8 flex flex-col justify-between">
                  <div className="space-y-0">
                    <img
                      src={quotesSvg}
                      alt="quote"
                      className="md:w-14 md:h-14 w-10 h-10 px-0 mt-1"
                    />
                    <p className="md:text-[14px] text-xs leading-relaxed text-black/80 ml-4">
                      {director.quote}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-black/70 text-right mt-0.5">
                    — {director.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Message;
