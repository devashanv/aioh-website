import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";

import GrowthIcon from "../../assets/img/icons/Increase.svg";
import RevenueIcon from "../../assets/img/icons/Revenue.svg";
import ArrowIcon from "../../assets/img/icons/arrow.svg";
import TestProject from "../../assets/img/test-project.webp";
import WebProject from "../../assets/img/web-project.jpg";

// Updated slides array with left side content
const slides = [
  {
    title: "Rental Car Website Development",
    client: "- Kandy Rental Car -",
    description:
      "Designed and developed a responsive, user-friendly website for a car rental service, featuring real-time vehicle availability, booking functionality, and location-based search to enhance customer experience and streamline operations.",
    challenges: [
      "Simplifying a complicated design process",
      "Giving consumers a seamless digital experience when designing their car",
      "Real time experience of designing your car",
      "A comprehensive back-end platform that allowed real time updates",
    ],
    image: TestProject,
    // Left side content for this slide
    stats: {
      growth: {
        value: 156,
        label: "Increase Business Growth",
      },
      revenue: {
        value: 125,
        label: "Increase Total Revenue",
      },
    },
  },
  {
    title: "Food Delivery App Design",
    client: "- Colombo Eats -",
    description:
      "Built a mobile-first food delivery platform with real-time tracking, order management, and seamless payment integration to enhance customer engagement and operational efficiency.",
    challenges: [
      "Optimizing delivery routes",
      "Integrating multiple payment options",
      "Real-time order tracking",
      "User-friendly app interface",
    ],
    image: WebProject,
    // Different left side content for this slide
    stats: {
      growth: {
        value: 142,
        label: "Increase User Engagement",
      },
      revenue: {
        value: 118,
        label: "Increase Order Volume",
      },
    },
  },
];

const SuccessHistory: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection("right");
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slide = slides[current];

  return (
    <section className="h-full flex flex-col gap-3">
      {/* header */}
      <section className="h-2/10 text-center">
        <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium mb-3">
          Our Work, Your Growth
        </h1>
        <p className="text-[18px] lg:px-0 px-3 font-light mb-6">
          Showcasing impactful digital solutions that drive real business
          results.
        </p>
      </section>

      {/* content */}
      <section className="h-auto lg:h-8/10">
        <div className="flex lg:flex-row flex-col-reverse gap-5 gap-red-300 h-full">
          {/* percentage panel - now dynamic with animation */}
          <div className="bg-gradient-to-t from-[#010A12] to-[#002D5A] w-full lg:w-3/12 rounded-xl flex flex-col items-center justify-center gap-6 p-5 pl-10">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`growth-${current}`}
                initial={{ y: direction === "right" ? 50 : -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: direction === "right" ? -50 : 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <p className="lg:text-[96px] text-6xl font-bold text-white text-center lg:text-left">
                  {slide.stats.growth.value}
                  <span className="text-primary text-3xl lg:text-[70px] ml-3 font-medium">
                    %
                  </span>
                </p>
                <div className="w-full lg:w-2/3 flex text-white items-center justify-between mx-auto mt-2">
                  <p className="text-left lg:text-xl">
                    {slide.stats.growth.label.split(" ")[0]} <br />
                    <span className="text-primary">
                      {slide.stats.growth.label.split(" ").slice(1).join(" ")}
                    </span>
                  </p>
                  <img
                    src={GrowthIcon}
                    alt="Growth icon"
                    className="w-10 h-10"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`revenue-${current}`}
                initial={{ y: direction === "right" ? 50 : -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: direction === "right" ? -50 : 50, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="w-full"
              >
                <p className="lg:text-[96px] text-6xl font-bold text-white text-center lg:text-left">
                  {slide.stats.revenue.value}
                  <span className="text-primary text-3xl lg:text-[70px] ml-3 font-medium">
                    %
                  </span>
                </p>
                <div className="w-full lg:w-2/3 flex text-white items-center justify-between mx-auto mt-2">
                  <p className="text-left lg:text-xl">
                    {slide.stats.revenue.label.split(" ")[0]} <br />
                    <span className="text-primary">
                      {slide.stats.revenue.label.split(" ").slice(1).join(" ")}
                    </span>
                  </p>
                  <img
                    src={RevenueIcon}
                    alt="Revenue icon"
                    className="w-10 h-10"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* description section - static background */}
          <div className="bg-gradient-to-t text-white from-[#010A12] to-[#002D5A] w-full lg:w-9/12 rounded-xl p-5 lg:p-10 relative overflow-hidden">
            {/* Navigation Buttons */}
            <div className="absolute md:bottom-10 right-16 bottom-8 flex gap-2 z-10 p-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-[#01213A] text-white rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition cursor-pointer"
              >
                <img src={ArrowIcon} alt="Previous" className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition cursor-pointer"
              >
                <img
                  src={ArrowIcon}
                  alt="Next"
                  className="w-5 h-5 transform scale-x-[-1]"
                />
              </button>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ x: direction === "right" ? 200 : -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === "right" ? -200 : 200, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col justify-between"
              >
                {/* intro */}
                <div className="h-1/2 flex flex-col-reverse lg:flex-row">
                  <div className="w-full lg:w-2/3 text-left">
                    <p className="text-2xl font-light">{slide.title}</p>
                    <p className="mt-3">{slide.client}</p>
                    <p className="mt-7 leading-8 text-justify lg:pr-10 font-thin text-white/80">
                      {slide.description}
                    </p>
                  </div>

                  <div className="w-full lg:w-1/3 relative p-5">
                    {/* project image */}
                    <div className="z-10 hidden lg:block bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg -rotate-x-13 -rotate-y-18 px-3 pt-8 pb-3">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-fit rounded-xl"
                      />
                    </div>

                    <div className="z-10 lg:hidden block bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg px-3 pt-8 pb-3">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-fit rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* challenge section */}
                <div className="flex flex-col lg:flex-row w-full h-auto lg:h-1/2 mb-5 lg:mb-0">
                  <div className="text-left w-full lg:w-2/3 pt-5">
                    <p className="text-lg mb-3">Challenges, we solved</p>
                    <ul className="font-thin text-white/80 flex flex-col gap-3">
                      {slide.challenges.map((c, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 justify-start"
                        >
                          <FaRegDotCircle
                            style={{ width: "16px" }}
                            className="text-[#078BD6]"
                          />
                          <p>{c}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SuccessHistory;
