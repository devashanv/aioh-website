import Footer from "../component/common/Footer";
import HeroSection from "../component/home/HeroSection";
import CoreServices from "../component/home/CoreServices";
import SuccessHistory from "../component/home/SuccessHistory";
import Categories from "../component/home/Categories";
import ClientBase from "../component/home/ClientBase";

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
      {/* Header */}
      <div className="mx-auto mb-3.5 p-3.5">
        <HeroSection />

        <div 
          className="bg-white rounded-xl my-5 flex pl-5">
          <ul 
            className="flex py-10 text-xl bg-red-400 font-medium w-full justify-between">
            <li>Digital Marketing</li>
            <li><GrEmptyCircle className="w-20"/></li>

            <li>Software Development</li>
            <li><GrEmptyCircle /></li>

            <li>Video Creation</li>
            <li><GrEmptyCircle /></li>

            <li>Creative Design</li>
            <li><GrEmptyCircle /></li>

            <li>Web Development</li>
            <li><GrEmptyCircle /></li>

            <li>SEO Optimization</li>
            <li><GrEmptyCircle /></li>

            <li>Graphic Designing</li>
            <li><GrEmptyCircle /></li>    
          </ul>
        </div>
      </div>

      {/* tech stack */}
      <section 
        className="mx-auto mb-3.5 p-3.5 w-full rounded-xl lg:mt-30 mt-20">
          <video width="640" controls 
          className="w-full rounded-xl h-100">
            <source src="video.mp4" type="video/mp4" />
          </video>
      </section>

      {/* core services */}
      <section
        className="mb-3.5 p-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20">
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
        className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20">
        <SuccessHistory />
      </section>

      {/* categories sec*/}
      <section
        className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20">
        <Categories />
      </section>

      {/* clients sec*/}
      <section
        className="mb-3.5 px-3.5 h-auto lg:h-[100dvh] lg:mt-30 mt-20">
          <ClientBase />
      </section>
    
      {/* Footer */}
      <section className="lg:mt-80">
        <Footer />

      </section>
    </div>
  );
}

export default Homepage;
