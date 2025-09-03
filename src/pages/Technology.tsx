import Hero from "../component/technology/Hero";
import Service from "../component/technology/Service";
import Process from "../component/technology/Process";
import RecentWork from "../component/technology/RecentWork";
import Contact from "../component/technology/ContactSection";

import { useEffect } from "react";
import Header from "../component/common/Header";
import FooterTop from "../component/common/FooterTop";
import Footer from "../component/common/Footer";

const Merketing: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="m-3.5 text-text font-['Roboto']">
        {/* Header */}
        <div className="mx-auto mb-3.5">
          <Header currentPath="/Technology" />
        </div>

        {/* Hero*/}
        <section className="w-full lg:pt-14 rounded-[20px]">
          <Hero />
        </section>

        {/* Services */}
        <section
          className="mt-20 md:mt-30 bg-white rounded-[20px]"
          id="services"
        >
          <Service />
        </section>

        {/* Process */}
        <section className="mt-20 md:mt-30 bg-gradient-to-r from-[#01213A] from-5% to-[#035BA0] to-100% rounded-[20px]">
          <Process />
        </section>

        {/* RecentWork */}
        <section className="mt-20 md:mt-30 bg-transparent rounded-[20px]">
          <RecentWork />
        </section>

        {/* Contact */}
        <section className="mt-20 md:mt-30 bg-white rounded-[20px]">
          <Contact />
        </section>
      </div>
      {/* Before Footer */}
      <section className="lg:mt-30">
        <FooterTop />
      </section>

      {/* Footer */}
      <section className="lg:mt-50" id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Merketing;
