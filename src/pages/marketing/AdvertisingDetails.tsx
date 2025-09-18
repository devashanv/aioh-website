import { useEffect } from "react";
import { motion } from "framer-motion";

import Header from "../../component/common/Header";
import FooterTop from "../../component/common/FooterTop";
import Footer from "../../component/common/Footer";
import Breadcrumb from "../../component/common/Breadcrumb";
import WebHero from "../../component/AdvertisingDetails/WebHero";
import WebFramework from "../../component/AdvertisingDetails/WebFramework";
import WebContact from "../../component/AdvertisingDetails/WebContact";
import WebRecentWork from "../../component/AdvertisingDetails/WebRecentWork";

function AdevertisingService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full font-['Roboto'] min-h-screen p-3.5 overflow-x-hidden">
        {/* Header */}
        <div className="mx-auto mb-3.5">
          <Header currentPath="/marketing" />
        </div>

        <section className="relative rounded-[20px] bg-gradient-to-r from-white via-[#078BD612] to-white sm:bg-top bg-cover bg-center lg:mb-30 mb-20">
          {/* Breadcrumb */}
          <motion.div
            className="w-11/12 mx-auto relative z-10 pt-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Breadcrumb
              levels={[
                { label: "Home", path: "/" },
                { label: "Services", path: "/Technology" },
                { label: "Web Development" },
              ]}
            />
          </motion.div>

          {/* WebHero */}
          <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-0">
            <WebHero />
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-[#01213A] rounded-[20px] lg:mb-30 mb-20">
          <div className="w-11/12 mx-auto">
            <WebFramework />
          </div>
        </section>

        {/* Section 3 */}
        <section
          id="WebRecentWork"
          className=" rounded-[20px] lg:mb-30 mb-20 bg-transparent"
        >
          <div className="w-11/12 mx-auto">
            <WebRecentWork />
          </div>
        </section>

        {/* Section 4 */}
        <section className="bg-white rounded-[20px] py-10 lg:mb-30 mb-20">
          <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-10 ">
            <WebContact />
          </div>
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
}

export default AdevertisingService;
