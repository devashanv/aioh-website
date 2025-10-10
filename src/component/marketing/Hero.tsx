import { motion } from "framer-motion";
import heroVM from "../../assets/video/heroM.mp4";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-1">
        <motion.div
          className="flex-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* heading in desktop */}
          <motion.h1
            className="hidden lg:block text-[28px] md:text-[32px] lg:text-[52px] lg:leading-[80px] font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Growth <span className="text-primary">Marketing</span>{" "}
            Powerhouse
          </motion.h1>

          <motion.p
            className="mt-4 text-base lg:text-xl leading-7 lg:leading-8 font-light text-justify"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We don't just run random stuff and hope for the best. We take time
            to understand your business, study your customers, and create
            marketing strategies that deliver quick wins today and sustainable
            growth tomorrow.
          </motion.p>

          <button
            className="w-fit lg:mt-10 px-6 py-3 bg-primary hover:bg-primary/80 text-base lg:text-xl rounded-full cursor-pointer font-medium flex items-center justify-center"
            // onClick={() => {
            //   const section = document.getElementById("services");
            //   if (section) {
            //     section.scrollIntoView({ behavior: "smooth" });
            //   }
            // }}
            onClick={() => {
              navigate("/consultation", { replace: true });
              window.location.reload();
            }}
          >
            <span>Schedule a Call</span>
          </button>
        </motion.div>

        {/* Right sec */}
        <motion.div
          className="flex-col lg:flex space-y-4 lg:space-y-0 lg:w-1/2 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* heading in mobile */}
          <motion.h1
            className="block lg:hidden text-[28px] md:text-[32px] font-bold text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Growth <span className="text-primary">Marketing</span>{" "}
            Powerhouse
          </motion.h1>

          <motion.div
            className="rounded-[20px] lg:w-auto overflow-hidden lg:translate-x-[9%]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <video
              src={heroVM}
              className="w-full h-auto lg:h-[480px] object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
