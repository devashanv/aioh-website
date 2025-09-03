// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// import Footer from "../component/common/Footer";
// import HeroSection from "../component/home/HeroSection";
// import CoreServices from "../component/home/CoreServices";
// import SuccessHistory from "../component/home/SuccessHistory";
// import Categories from "../component/home/Categories";
// import ClientBase from "../component/home/ClientBase";
// import ServiceRibbon from "../component/home/ServiceRibbon";
// import SplineRobo from "../component/home/SplineRobo";
// import LoadingScreen from "../component/home/LoadingScreen";

// import LogoCCL from "../assets/img/icons/ccl.svg";
// import LogoFly from "../assets/img/icons/fly.svg";
// import LogoHari from "../assets/img/icons/hari.svg";
// import LogoLTT from "../assets/img/icons/ltt.svg";

// function Homepage() {
//   const clientLogo = [LogoCCL, LogoFly, LogoHari, LogoLTT];
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 6800); // 8 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {/* Loading Screen */}
//       {isLoading && <LoadingScreen />}

//       {/* Home Page Content */}
//       {!isLoading && (
//         <motion.div
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 2.5,
//             ease: [0.22, 1, 0.36, 1], // smoother "easeOutExpo" feel
//           }}
//           className="min-h-screen bg-gray-50 text-center overflow-x-hidden"
//         >
//           {/* Header */}
//           <div className="mx-auto mb-3.5 p-3.5">
//             <HeroSection />
//             <div className="bg-white h-25 rounded-xl my-5 flex items-center justify-center">
//               <ServiceRibbon />
//             </div>
//             <SplineRobo />
//           </div>

//           {/* Tech Stack */}
//           <section
//             className="mx-auto mb-3.5 p-3.5 w-full rounded-xl lg:mt-30 mt-20"
//             id="techstack"
//           >
//             <video width="640" controls className="w-full rounded-xl h-100">
//               <source src="video.mp4" type="video/mp4" />
//             </video>
//           </section>

//           {/* Core Services */}
//           <section
//             className="mb-3.5 p-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
//             id="services"
//           >
//             <div className="bg-white lg:p-3.5 rounded-xl bg-blue-300 flex h-full">
//               <div className="w-full lg:w-11/12 mx-auto flex">
//                 <CoreServices />
//               </div>
//             </div>
//           </section>

//           {/* Testimonials */}
//           <section
//             className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
//             id="success"
//           >
//             <SuccessHistory />
//           </section>

//           {/* Categories section*/}
//           <section
//             className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
//             id="catego"
//           >
//             <Categories />
//           </section>

//           {/* Clients base */}
//           <section
//             className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
//             id="client"
//           >
//             <ClientBase />
//           </section>

//           {/* Footer */}
//           <section className="lg:mt-80" id="footer">
//             <Footer />
//           </section>
//         </motion.div>
//       )}
//     </>
//   );
// }

// export default Homepage;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Footer from "../component/common/Footer";
import HeroSection from "../component/home/HeroSection";
import CoreServices from "../component/home/CoreServices";
import SuccessHistory from "../component/home/SuccessHistory";
import Categories from "../component/home/Categories";
import ClientBase from "../component/home/ClientBase";
import ServiceRibbon from "../component/home/ServiceRibbon";
import SplineRobo from "../component/home/SplineRobo";
import LoadingScreen from "../component/home/LoadingScreen";

import LogoCCL from "../assets/img/icons/ccl.svg";
import LogoFly from "../assets/img/icons/fly.svg";
import LogoHari from "../assets/img/icons/hari.svg";
import LogoLTT from "../assets/img/icons/ltt.svg";
import FooterTop from "../component/common/FooterTop";

function Homepage() {
  const clientLogo = [LogoCCL, LogoFly, LogoHari, LogoLTT];
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6800); // 8 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen />}

      {/* Home Page Content */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-screen bg-gray-50 text-center overflow-x-hidden"
        >
          {/* Invisible SVG path for GSAP MotionPath */}
          <svg width="0" height="0">
            <path
              id="robotPath"
              d="M100,100 C300,300 600,400 900,600"
              fill="none"
              stroke="red"
              strokeWidth="2"
            />
          </svg>

          {/* Floating Robot */}
          <SplineRobo />

          {/* Header */}
          <div className="mx-auto mb-3.5 p-3.5">
            <HeroSection />
            <div className="bg-white h-25 rounded-xl my-5 flex items-center justify-center">
              <ServiceRibbon />
            </div>
          </div>

          {/* Tech Stack */}
          <section
            className="mx-auto mb-3.5 p-3.5 w-full rounded-xl lg:mt-30 mt-20"
            id="techstack"
          >
            <video width="640" controls className="w-full rounded-xl h-100">
              <source src="video.mp4" type="video/mp4" />
            </video>
          </section>

          {/* Core Services */}
          <section
            className="mb-3.5 p-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
            id="services"
          >
            <div className="bg-white lg:p-3.5 rounded-xl flex h-full">
              <div className="w-full lg:w-11/12 mx-auto flex">
                <CoreServices />
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section
            className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
            id="success"
          >
            <SuccessHistory />
          </section>

          {/* Categories */}
          <section
            className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
            id="catego"
          >
            <Categories />
          </section>

          {/* Client Base */}
          <section
            className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
            id="client"
          >
            <ClientBase />
          </section>
          {/* Before Footer */}
          <section className="lg:mt-30">
            <FooterTop />
          </section>

          {/* Footer */}
          <section className="lg:mt-50" id="footer">
            <Footer />
          </section>
        </motion.div>
      )}
    </>
  );
}

export default Homepage;
