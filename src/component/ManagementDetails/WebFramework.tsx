import { motion } from "framer-motion";
import { useState } from "react";

/* -------------------------------- data -------------------------------- */
const steps = [
  {
    number: "01",
    title: "Study and Research",
    description:
      "We analyze industry trends, user needs, and tech insights to build a strong foundation for project success.",
  },
  {
    number: "02",
    title: "Plan and Strategic",
    description:
      "Our team creates detailed plans, defines goals, and sets timelines to guide every stage of the project.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We craft clean, modern UI/UX designs that align with client goals and ensure a smooth user experience.",
  },
  {
    number: "04",
    title: "Prototype",
    description:
      "We build interactive prototypes to visualize ideas and gather feedback before full-scale development begins.",
  },
  {
    number: "05",
    title: "Develop and Test",
    description:
      "Our developers write clean code and rigorously test each feature to ensure performance, speed, and security.",
  },
  {
    number: "06",
    title: "Launch and Support",
    description:
      "We deploy your product with care and provide ongoing updates, maintenance, and technical support.",
  },
];

const WebFramework: React.FC = () => {
  // hover state
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col py-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-center text-[26px] lg:text-[48px] font-bold text-white">
          The Way We Build
        </h2>
        <p className="text-center text-[16px] lg:text-[18px] text-white mt-0 font-light mb-12">
          How We Design, Develop, and Deliver Impactful Digital Products
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:py-4 gap-6 md:gap-14 mx-auto w-full">
        {steps.map((step, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative transition-all duration-300 rounded-[20px] p-4 ${
              (hoveredIndex === null && i === 0) || hoveredIndex === i
                ? "bg-gradient-to-r from-[#02EC9770] to-transparent"
                : ""
            }`}
          >
            <h3 className="text-[18px] xl:text-[24px] font-medium text-white">
              <span className="text-white mr-2 text-[28px] xl:text-[32px] font-medium">
                {step.number}
              </span>
              {step.title}
            </h3>
            <p className="text-sm xl:text-base font-light text-white/80 mt-1 leading-relaxed text-justify">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebFramework;
