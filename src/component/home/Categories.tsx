import React from "react";
import { Link } from "react-router-dom";

import MarketingImg from "../../assets/img/sample/marketing.gif";
import TechnologyImg from "../../assets/img/sample/technology.gif";
import DesignImg from "../../assets/img/sample/design.gif";
import ExploreIcon from "../../assets/img/icons/project-explore.svg";

const Categories: React.FC = () => {
  return (
    <>
      <section className="w-11/12 mx-auto h-full">
        <section className="h-auto lg:h-1/4 lg:mb-0 mb-10">
          <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium lg:mb-3 text-center lg:text-left lg:w-1/2">
            Our Core Capabilities and Service Expertise
          </h1>
        </section>

        <section className="w-full h-3/4 flex lg:flex-row flex-col gap-8">
          <section className="w-full lg:w-1/3 h-full flex flex-col gap-8">
            <section className="bg-white h-4/12 rounded-[20px] p-5 text-left flex flex-col gap-3">
              <h2 className="font-medium text-2xl">Marketing</h2>
              <p className="font-light lg:text-sm">
                Stop wasting money on marketing that doesn't work. We build new
                generation custom marketing strategies for your industry - we
                handle all your marketing so you can focus on running your
                business. Get more visibility, attract the right customers, and
                watch your revenue grow.
              </p>
            </section>

            <section className="relative h-8/12 w-full rounded-xl">
              {/* gradient */}
              <div className="absolute bg-gradient-to-b from-[#078BD6]/44 to-[#D9D9D9]/0 h-64 w-full rounded-[20px]"></div>

              {/* chips */}
              <div className="w-full h-auto absolute bottom-2 flex flex-wrap gap-3 px-5">
                <p className="py-2 px-3 w-auto text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  SEO
                </p>
                <p className="py-2 px-3 w-auto text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  growth strategies
                </p>
                <p className="py-2 px-3 w-auto text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  Paid ads
                </p>
                <p className="py-2 px-3 w-auto text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  SM Management
                </p>
                <p className="py-2 px-3 w-auto text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  Email Marketing
                </p>
                <p className="py-2 px-3 w-auto text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  Digital strategy
                </p>
                <p className="py-2 px-3 w-auto text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  Consultation
                </p>
              </div>

              <img
                src={MarketingImg}
                alt=""
                className="w-full h-full object-cover rounded-[20px]"
              />
              <Link to="/Marketing">
                <button className="absolute top-5 right-5 bg-primary w-12 h-12 rounded-full hover:cursor-pointer hover:bg-primary/85">
                  <img src={ExploreIcon} alt="" />
                </button>
              </Link>
            </section>
          </section>
          <section className="w-full lg:w-1/3 h-full flex flex-col-reverse lg:flex-col gap-8">
            <section className="relative h-8/12 rounded-[20px] w-full ">
              {/* gradient */}
              <div className="absolute bg-gradient-to-b from-[#078BD6]/44 to-[#D9D9D9]/0 h-64 w-full rounded-[20px]"></div>

              <img
                src={TechnologyImg}
                alt=""
                className="w-full h-full object-cover rounded-[20px]"
              />
              <Link to="/Technology">
                <button className="absolute top-5 right-5 bg-primary w-12 h-12 rounded-full hover:cursor-pointer hover:bg-primary/85">
                  <img src={ExploreIcon} alt="" />
                </button>
              </Link>
            </section>

            <section className="bg-white h-4/12 rounded-[20px] p-5 text-left flex flex-col gap-3">
              <h2 className="font-medium text-2xl">Technology</h2>
              <p className="font-light text-sm">
                From Web development to custom software and mobile apps to
                system integrations and automation - we build technology that
                solves real business problems. Perfect for companies ready to
                streamline operations, improve efficiency, and scale smarter.
              </p>
            </section>
          </section>
          <section className="w-full lg:w-1/3 h-full flex flex-col gap-8">
            <section className="bg-white h-4/12 rounded-[20px] p-5 text-left flex flex-col gap-3">
              <h2 className="font-medium text-2xl">Design</h2>
              <p className="font-light lg:text-sm">
                Great design isn't just about looking good - it's about
                connecting with your customers. We create visual branding and
                marketing materials that speak to your audience and help build
                trust, whether you're B2B or B2C.
              </p>
            </section>

            <section className="relative h-8/12 rounded-[20px] w-full ">
              {/* gradient */}
              <div className="absolute bg-gradient-to-b from-[#078BD6]/44 to-[#D9D9D9]/0 h-64 w-full rounded-[20px]"></div>

              <img
                src={DesignImg}
                alt=""
                className="w-full h-full object-cover rounded-[20px]"
              />
              <Link to="/Design">
                <button className="absolute top-5 right-5 bg-primary w-12 h-12 rounded-full hover:cursor-pointer hover:bg-primary/85">
                  <img src={ExploreIcon} alt="" />
                </button>
              </Link>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Categories;
