import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Link } from 'react-router-dom';



import ArrowIcon from "../../assets/img/icons/arrow.svg";

import EhelepolaCS from '../../assets/caseStudies/ehelepola-cs.jpg'
import QueensCS from '../../assets/caseStudies/queens-cs.webp'
import RegencyCS from '../../assets/caseStudies/regency-cs.webp'
import WinchesterCS from '../../assets/caseStudies/winchester-cs.webp'
import WincraftCS from '../../assets/caseStudies/wincraft-cs.webp'
import UnknownCS from '../../assets/caseStudies/04.webp'


const SuccessStoriesNew = () => {
    const slides = [
        {
            title: "Developed museum website showcasing Kandyan heritage, boosting visibility globally.",
            client: "- Sri Dalada Maligawa -",
            description:
                "",
            challenges: [
                "Simplifying a complicated design process",
                "Giving consumers a seamless digital experience when designing their car",
                "Real time experience of designing your car",
                "A comprehensive back-end platform that allowed real time updates",
            ],
            image: EhelepolaCS,
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
            title: "Heritage storytelling unlocks 964.3% surge in organic engagement ",
            client: "- Hotel Queens -",
            description:
                "",
            challenges: [
                "Optimizing delivery routes",
                "Integrating multiple payment options",
                "Real-time order tracking",
                "User-friendly app interface",
            ],
            image: QueensCS,
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
            title: "Built responsive website for Regency Travel House, boosting engagement and trust.",
            client: "- Regency Travel House  -",
            description:
                "",
            challenges: [
                "Optimizing delivery routes",
                "Integrating multiple payment options",
                "Real-time order tracking",
                "User-friendly app interface",
            ],
            image: RegencyCS,
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
            title: "Designed corporate website for Winchester Global, enhancing accessibility and presence",
            client: "- Winchester Global  -",
            description:
                "",
            challenges: [
                "Optimizing delivery routes",
                "Integrating multiple payment options",
                "Real-time order tracking",
                "User-friendly app interface",
            ],
            image: WinchesterCS,
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
            title: "Selling Out Emirates Aviation Collectibles with a 1043% ROI ",
            client: "- Wincraft -",
            description:
                "",
            challenges: [
                "Optimizing delivery routes",
                "Integrating multiple payment options",
                "Real-time order tracking",
                "User-friendly app interface",
            ],
            image: WincraftCS,
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
            title: "Cutting Cost per Lead by 78% with Smarter Targeting ",
            client: "- UK Education Consultancy -",
            description:
                "",
            challenges: [
                "Optimizing delivery routes",
                "Integrating multiple payment options",
                "Real-time order tracking",
                "User-friendly app interface",
            ],
            image: UnknownCS,
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
            {/* desktop version */}
            <section
                className='relative w-full mx-auto h-full hidden lg:block'>
                {/* top content */}
                <div
                    className="absolute w-1/4 text-black text-left top-5 left-5 transform flex flex-col gap-2 z-10 p-2">
                    <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium mb-3">
                        Some of, <br />our Works
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
                        <img src={slide.image} alt="" className='h-full w-full object-cover rounded-2xl' />

                        {/* middle content */}
                        <div
                            className="absolute w-1/3 text-white top-1/2 right-5 lg:right-16 transform -translate-y-1/2 flex flex-col gap-2 z-10 p-2">
                            <p
                                className='text-[32px]  lg:text-[52px] font-medium text-left leading-15'>
                                {slide.title}
                            </p>

                            <p className='text-left leading-8 mt-6'>
                                {slide.description}
                            </p>

                            <Link to="">
                                <p className='text-sm text-white hover:text-white/80  text-left mt-10 underline '>Read the full Case study</p>
                            </Link>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </section>

            {/* mobile version */}
            <section
                className='relative lg:hidden block w-full mx-auto h-3/4'>
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
                        <img src={slide.image} alt="" className='h-full w-full object-cover rounded-2xl' />

                        {/* middle content */}
                        <div
                            className="absolute w-2/3 text-white top-1/3 -mt-10 right-5 lg:right-16 transform -translate-y-1/2 flex flex-col gap-2 z-10 p-2">
                            <p
                                className='text-[20px] md:text-[32px] lg:text-[52px] font-medium text-left leading-10'>
                                {slide.title}
                            </p>

                            <p className='text-right text-white/50 text-xs mt-2'>
                                {slide.client}
                            </p>


                        </div>

                        <Link to="">
                            <p className='text-sm text-white right-5 text-left bottom-5 underline absolute'>Read the full Case study</p>
                        </Link>

                    </motion.div>
                </AnimatePresence>
            </section>

        </>
    )
}

export default SuccessStoriesNew