import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Ring = () => (
  <svg
    width="100"
    height="100"
    className="w-[10px] h-[10px] rotate-[-82deg] inline-block align-bottom"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="45"
      stroke="transparent"
      strokeWidth="6"
      fill="none"
    />
    <circle
      cx="50"
      cy="50"
      r="45"
      stroke="url(#tailwindGradient)"
      strokeWidth="17"
      fill="none"
      strokeDasharray="282.6"
      strokeDashoffset="282.6"
      strokeLinecap="round"
      style={{
        animation: "fillRing75 5s ease forwards",
        transformOrigin: "center",
        transformBox: "fill-box",
      }}
    />
    <defs>
      <linearGradient id="tailwindGradient" gradientTransform="rotate(90)">
        <stop offset="0%" stopColor="#078bd6" />
        <stop offset="50%" stopColor="#02cbb9" />
        <stop offset="100%" stopColor="#02ec97" />
      </linearGradient>
    </defs>
  </svg>
);

const LoadingScreen: React.FC = () => {
  const text = "allinOne".split("");
  const ringIndex = text.findIndex(
    (char, i) => char === "O" && text.slice(i, i + 3).join("") === "One"
  );

  // exit functionality
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
    }, 5500); // Slightly longer than ring animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* translate to nav logo */}
      <motion.div
        initial={{ opacity: 1, x: 0, y: 0 }}
        animate={
          exit
            ? { opacity: 0, x: -500, y: -300 }
            : { opacity: 1, x: 0, y: 0 }
        }
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex gap-1 text-white items-center font-bold"
      >
        <div className="flex gap-1 text-white items-center font-bold h-auto">
          {text.map((char, index) => {
            if (index === ringIndex) {
              return <Ring key="ring" />;
            }

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: index * 0.4,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="text-[150px] font-normal"
              >
                {char}
              </motion.span>
            );
          })}

        </div>
      </motion.div>

      <style>
        {`
          @keyframes fillRing75 {
            to {
              stroke-dashoffset: 75.65;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;
