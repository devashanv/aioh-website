import React from "react";
import { motion } from "framer-motion";

import {
  MdAssessment,
  MdHandshake,
  MdOutlineDashboard,
  MdOutlineLayers,
  MdOutlineRocketLaunch,
  MdOutlineTrendingUp,
  MdOutlineUpdate,
} from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";

const steps = [
  {
    label: "Building the Vision Together",
    icon: <MdHandshake />,
    description:
      "Every great project starts with understanding. We collaborate closely with the client to capture their vision, goals, and expectations, setting the foundation for a strong and transparent partnership.",
  },
  {
    label: "Shaping the Blueprint",
    icon: <MdOutlineDashboard />,
    description:
      "Through strategic discussions and in-depth analysis, we define the project’s functional and technical scope. This phase transforms ideas into a clear and actionable development roadmap.",
  },
  {
    label: "Crafting the Experience",
    icon: <MdOutlineLayers />,
    description:
      "Our team plans every step with precision by allocating resources, defining milestones, and designing intuitive, user-focused interfaces that reflect usability and brand identity.",
  },
  {
    label: "Bringing Ideas to Life",
    icon: <MdOutlineRocketLaunch />,
    description:
      "Using the latest technologies and frameworks, our developers build scalable, secure, and high-performing systems. Each module is coded and integrated to deliver a seamless digital experience.",
  },
  {
    label: "Ensuring Perfection",
    icon: <MdOutlineTrendingUp />,
    description:
      "Before any launch, our QA engineers rigorously test every feature through multiple layers of validation including unit, integration, and system testing to ensure stability, performance, and reliability.",
  },
  {
    label: "From Code to Reality",
    icon: <TbWorldCheck />,
    description:
      "With careful planning and precision, we deploy the finalized system to the live environment. Our team ensures a smooth transition with zero downtime and post-launch performance checks.",
  },
  {
    label: "Delivering Knowledge and Control",
    icon: <MdOutlineUpdate />,
    description:
      "We provide complete technical documentation, user manuals, and project reports, ensuring the client has full ownership and understanding of their system.",
  },
  {
    label: "Sustaining Excellence",
    icon: <MdAssessment />,
    description:
      "Our commitment continues beyond the launch. We monitor, maintain, and update systems regularly to ensure optimal performance, security, and adaptability to future needs.",
  },
];

const Process: React.FC = () => {
  return (
    <div className="mx-auto py-4 md:py-6 lg:py-12 text-white w-5/6 md:w-11/12">
      {/* sec heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[26px] md:text-3xl lg:text-5xl lg:leading-[62px] font-bold text-center w-2/3 lg:w-full"
        >
          How We Deliver Our Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-3/4 lg:w-1/2 mt-4 text-sm lg:text-lg leading-6 md:leading-6 lg:leading-7 font-light text-center"
        >
          We follow a focused, collaborative process from strategic discovery to
          agile execution ensuring clarity, quality, and impact at every stage.
        </motion.p>
      </motion.div>

      {/* Steps */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 py-6 md:py-10 gap-6 md:gap-10"
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-2 text-center duration-300 hover:scale-105 transition"
          >
            <div className="flex items-center justify-center p-2 gap-4 md:gap-6">
              <div className="relative bg-primary w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl">
                <div className="text-secondary text-3xl md:text-4xl">
                  {step.icon}
                </div>
                <p className="absolute -top-2 -right-2 bg-[#0A7CBD] w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  {index + 1}
                </p>
              </div>
            </div>

            <div className="text-white text-base lg:text-lg">{step.label}</div>
            <div className="text-white/80 text-sm lg:text-base text-center font-light mt-2">
              {step.description}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Process;
