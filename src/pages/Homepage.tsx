import Footer from "../component/common/Footer";
import HeroSection from "../component/home/HeroSection";
import CoreServices from "../component/home/CoreServices";
import SuccessHistory from "../component/home/SuccessHistory";
import Categories from "../component/home/Categories";
import ClientBase from "../component/home/ClientBase";
import ServiceRibbon from "../component/home/ServiceRibbon";
import SplineRobo from "../component/home/SplineRobo";
import LoadingScreen from "../component/home/LoadingScreen";

import { GrEmptyCircle } from "react-icons/gr";
import LogoCCL from '../assets/img/icons/ccl.svg'
import LogoFly from '../assets/img/icons/fly.svg'
import LogoHari from '../assets/img/icons/hari.svg'
import LogoLTT from '../assets/img/icons/ltt.svg'

function Homepage() {
  
  const clientLogo = [
    LogoCCL,
    LogoFly,
    LogoHari,
    LogoLTT
  ]

  return (
    <div className="min-h-screen bg-gray-50 text-center overflow-x-hidden">
      <LoadingScreen />
      {/* Header */}
      <div className="mx-auto mb-3.5 p-3.5">
        <HeroSection />

        <div 
          className="bg-white h-25 rounded-xl my-5 flex items-center justify-center">
            <ServiceRibbon />
        </div>

        <SplineRobo />
      </div>

      {/* tech stack */}
      <section 
        className="mx-auto mb-3.5 p-3.5 w-full rounded-xl lg:mt-30 mt-20"
        id="techstack">
          <video width="640" controls 
          className="w-full rounded-xl h-100">
            <source src="video.mp4" type="video/mp4" />
          </video>
      </section>

      {/* core services */}
      <section
        className="mb-3.5 p-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
        id="services">
        <div 
          className="bg-white lg:p-3.5 rounded-xl bg-blue-300 flex h-full">
          <div
            className="w-full lg:w-11/12 mx-auto flex">
            <CoreServices />
          </div>        
        </div>
      </section>

      {/* success history */}
      <section
        className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
        id="success">
        <SuccessHistory />
      </section>

      {/* categories sec*/}
      <section
        className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
        id="catego">
        <Categories />
      </section>

      {/* clients sec*/}
      <section
        className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20"
        id="client">
          <ClientBase />
      </section>
    
      {/* Footer */}
      <section className="lg:mt-80"
      id="footer">
        <Footer />

      </section>
    </div>
  );
}

export default Homepage;
