import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

import SLideImage from '../../assets/sample/ss-sample.webp'
import ArrowIcon from "../../assets/img/icons/arrow.svg";


const SuccessStoriesNew = () => {
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
            image: SLideImage,
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
            image: SLideImage,
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
            image: SLideImage,
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
            image: SLideImage,
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
            image: SLideImage,
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
            image: SLideImage,
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
        <>
            <section
                className='relative w-full mx-auto h-full'>
                {/* top content */}
                <div
                    className="absolute w-1/4 text-black text-left top-5 left-5 transform flex flex-col gap-2 z-10 p-2">
                    <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium mb-3">
                        Our Work, <br />Your Growth
                    </h1>
                    <p className="text-[18px] pr-10 font-light mb-6 ">
                        Showcasing impactful digital solutions that drive real business
                        results.
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute md:bottom-10 left-5 lg:right-16 bottom-0 lg:bottom-8 flex gap-2 z-10 p-2">
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

                <AnimatePresence mode="sync" initial={false}>
                    <motion.div
                        key={current}
                        initial={{ x: direction === "right" ? 300 : -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction === "right" ? -300 : 300, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 35
                        }}
                        className="absolute top-0 left-0 w-full h-full flex flex-col justify-between"
                    >


                        {/* image */}
                        <img src={SLideImage} alt="" className='h-full w-full object-cover rounded-2xl' />

                        {/* middle content */}
                        <div
                            className="absolute w-1/3 text-white top-1/2 right-5 lg:right-16 transform -translate-y-1/2 flex flex-col gap-2 z-10 p-2">
                            <p
                                className='text-[32px] md:text-[48px] lg:text-[52px] font-medium text-left leading-15'>
                                {slide.title}
                            </p>

                            <p className='text-left leading-8 mt-6'>
                                {slide.description}
                            </p>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </section>

        </>
    )
}

export default SuccessStoriesNew