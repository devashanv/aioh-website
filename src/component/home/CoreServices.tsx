import light from "../../assets/img/icons/light.svg";
import customer from "../../assets/img/icons/customer.svg";
import goal from "../../assets/img/icons/goal.svg";
import rocket from "../../assets/img/icons/rocket.svg";
import computer from "../../assets/img/icons/workstation.svg";
import global from "../../assets/img/icons/Globe.svg";
import plus from "../../assets/img/icons/plus.svg";
import googleImg1 from "../../assets/about/client.png";
import googleImg2 from "../../assets/about/client2.jpeg";
import googleImg3 from "../../assets/about/client.png";
import googleImg4 from "../../assets/about/client2.jpeg";
import googleImg5 from "../../assets/about/google.jpg";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import { motion } from "framer-motion";

const CoreServices = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        {/* content sec */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full lg:w-1/2 text-center lg:text-left lg:py-20 flex flex-col justify-between"
        >
          <div className="">
            <h1 className="text-[32px] md:text-[48px] lg:text-[52px] font-medium mb-3">
              Our Core Services
            </h1>
            <p className="text-[18px] lg:px-0 px-3 font-light mb-6">
              Enhances brand growth through expert IT services
            </p>
          </div>

          {/* ratings */}
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center mb-4 -space-x-5">
              {[
                googleImg1,
                googleImg2,
                googleImg3,
                googleImg4,
                googleImg5,
                plus,
              ].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={
                    i === 5
                      ? `w-6 h-6 font-bold ml-3`
                      : `w-10 h-10 rounded-full border-2 border-[#078BD6]`
                  }
                />
              ))}
            </div>
            <div className="text-[18px] font-medium flex flex-col">
              <div className="flex">
                <MdOutlineStarPurple500
                  style={{ height: "30px", width: "30px" }}
                  className="text-amber-400"
                />
                <MdOutlineStarPurple500
                  style={{ height: "30px", width: "30px" }}
                  className="text-amber-400"
                />
                <MdOutlineStarPurple500
                  style={{ height: "30px", width: "30px" }}
                  className="text-amber-400"
                />
                <MdOutlineStarPurple500
                  style={{ height: "30px", width: "30px" }}
                  className="text-amber-400"
                />
                <MdOutlineStarHalf
                  style={{ height: "30px", width: "30px" }}
                  className="text-amber-400"
                />
              </div>
              <p className="text-sm text-right">Google Ratings</p>
            </div>
          </div>
        </motion.div>

        {/* cards sec*/}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col gap-2 py-5"
        >
          {/* cards rows 1 */}
          <div className="flex h-1/3 gap-3">
            {/* cards */}
            <div className="w-1/2 rounded-xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#078BD6]/30 hover:to-[#02EC97]/30 p-5 text-left flex flex-col gap-2">
              <div className="h-1/5">
                <img src={light} alt="" />
              </div>
              <div className="h-2/5 flex items-end">
                <p className="font-medium text-sm lg:text-lg lg:mt-0 mt-3">
                  Shaping the Future with IT Excellence
                </p>
              </div>
              <div className="h-2/5">
                <p className="font-thin text-xs lg:text-lg">
                  Empowering brands to flourish online with cutting-edge IT
                  solutions
                </p>
              </div>
            </div>

            <div className="w-1/2 rounded-xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#078BD6]/30 hover:to-[#02EC97]/30 p-5 text-left flex flex-col gap-2">
              <div className="h-1/5">
                <img src={global} alt="" />
              </div>
              <div className="h-2/5 flex items-end">
                <p className="font-medium text-sm lg:text-lg lg:mt-0 mt-3">
                  Transforming Ideas into Digital Marvels
                </p>
              </div>
              <div className="h-2/5">
                <p className="font-thin text-xs lg:text-lg">
                  Empowering Building digital marvels with tailored web
                  solutions
                </p>
              </div>
            </div>
          </div>

          {/* cards rows 2 */}
          <div className="flex h-1/3 gap-3">
            {/* cards */}
            <div className="w-1/2 rounded-xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#078BD6]/30 hover:to-[#02EC97]/30 p-5 text-left flex flex-col gap-2">
              <div className="h-1/5">
                <img src={customer} alt="" />
              </div>
              <div className="h-2/5 flex items-end">
                <p className="font-medium text-sm lg:text-lg lg:mt-0 mt-3">
                  Shaping the Future with IT Excellence
                </p>
              </div>
              <div className="h-2/5">
                <p className="font-thin text-xs lg:text-lg">
                  Empowering brands to flourish online with cutting-edge IT
                  solutions
                </p>
              </div>
            </div>

            <div className="w-1/2 rounded-xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#078BD6]/30 hover:to-[#02EC97]/30 p-5 text-left flex flex-col gap-2">
              <div className="h-1/5">
                <img src={rocket} alt="" />
              </div>
              <div className="h-2/5 flex items-end">
                <p className="font-medium text-sm lg:text-lg lg:mt-0 mt-3">
                  Shaping the Future with IT Excellence
                </p>
              </div>
              <div className="h-2/5">
                <p className="font-thin text-xs lg:text-lg">
                  Empowering brands to flourish online with cutting-edge IT
                  solutions
                </p>
              </div>
            </div>
          </div>

          {/* cards rows 3*/}
          <div className="flex h-1/3 gap-3">
            {/* cards */}
            <div className="w-1/2 rounded-xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#078BD6]/30 hover:to-[#02EC97]/30 p-5 text-left flex flex-col gap-2">
              <div className="h-1/5">
                <img src={computer} alt="" />
              </div>
              <div className="h-2/5 flex items-end">
                <p className="font-medium text-sm lg:text-lg lg:mt-0 mt-3">
                  Shaping the Future with IT Excellence
                </p>
              </div>
              <div className="h-2/5">
                <p className="font-thin text-xs lg:text-lg">
                  Empowering brands to flourish online with cutting-edge IT
                  solutions
                </p>
              </div>
            </div>

            <div className="w-1/2 rounded-xl hover:cursor-pointer hover:bg-gradient-to-r hover:from-[#078BD6]/30 hover:to-[#02EC97]/30 p-5 text-left flex flex-col gap-2">
              <div className="h-1/5">
                <img src={goal} alt="" />
              </div>
              <div className="h-2/5 flex items-end">
                <p className="font-medium text-sm lg:text-lg lg:mt-0 mt-3">
                  Shaping the Future with IT Excellence
                </p>
              </div>
              <div className="h-2/5">
                <p className="font-thin text-xs lg:text-lg">
                  Empowering brands to flourish online with cutting-edge IT
                  solutions
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CoreServices;
