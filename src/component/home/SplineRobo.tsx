import React, { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Section = {
  id: string;
  position: "left" | "center" | "right";
  msg: string;
  scale: number;
  customLeft?: string;
};

const SplineRobo = () => {
  const robotWrapperRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("👋 Welcome to All In One Holdings!");
  const [position, setPosition] = useState<"left" | "center" | "right">("right");

  const sections: Section[] = [
    { id: "#hero", position: "right", msg: "👋 Welcome to All In One Holdings!", scale: 0.6},
    { id: "#techstack", position: "center", msg: "🧠 Exploring Our Tech Stack", scale: 0.7 },
    { id: "#services", position: "left", msg: "🛠️ Diving into Services", scale: 0.8 },
    { id: "#success", position: "right", msg: "💬 Reading Testimonials", scale: 0.9, customLeft: "calc(100% - 200px)" },
    { id: "#catego", position: "right", msg: "📦 Browsing Categories", scale: 1.0 },
    { id: "#client", position: "left", msg: "🤝 Meeting Clients", scale: 1.1 },
    { id: "#footer", position: "right", msg: "👋 Goodbye from Footer!", scale: 1.2, customLeft: "calc(100% - 100px)"  },
  ];

  const headMessageSections = ["#hero", "#techstack", "#client"];
  const currentSection = sections.find((s) => s.msg === message);
  const showAboveHead = currentSection && headMessageSections.includes(currentSection.id);

  useEffect(() => {
    const heroSection = sections[0];
    const initialLeft = heroSection.customLeft || "calc(100% - 300px)";
    const initialTransform = `translateY(-60%) scale(${heroSection.scale})`;

    // Force initial position immediately
    if (robotWrapperRef.current) {
      robotWrapperRef.current.style.left = initialLeft;
      robotWrapperRef.current.style.transform = initialTransform;
    }

    setMessage(heroSection.msg);
    setPosition(heroSection.position);

sections.forEach((section) => {
  const trigger = document.querySelector(section.id);
  if (!trigger) return;

  ScrollTrigger.create({
    trigger: section.id,
    start: "top center",
    end: "bottom center",
    onEnter: () => animateRobot(section),
    onEnterBack: () => {
      if (section.id === "#hero") {
        // Directly set style to avoid GSAP interpolation
        const left = section.customLeft || "calc(100% - 300px)";
        const transform = `translateY(-60%) scale(${section.scale})`;

        if (robotWrapperRef.current) {
          robotWrapperRef.current.style.left = left;
          robotWrapperRef.current.style.transform = transform;
        }

        setMessage(section.msg);
        setPosition(section.position);
      } else {
        animateRobot(section);
      }
    },
  });
});

    function animateRobot(section: Section) {
      let left = "50%";
      let xTransform = "translateX(-50%)";
      let yTransform = "translateY(-60%)";

      if (section.position === "left") {
        left = "200px";
        xTransform = "none";
      } else if (section.position === "right") {
        left = section.customLeft || "calc(100% - 400px)";
        xTransform = "none";
      }

      gsap.to(robotWrapperRef.current, {
        left,
        transform: `${yTransform} ${xTransform} scale(${section.scale})`,
        duration: 1.2,
        ease: "power3.out",
      });

      setMessage(section.msg);
      setPosition(section.position);
    }
  }, []);

  const bubbleClass =
    "bg-white text-black px-3 py-3 rounded-lg shadow-md text-base whitespace-nowrap relative";

  return (
    <div
      ref={robotWrapperRef}
      className="fixed top-1/2 z-40 pointer-events-none"
      style={{
        width: "300px",
        height: "300px",
      }}
    >
      {/* Message box */}
      {showAboveHead ? (
        <div className={`${bubbleClass} absolute left-1/2 transform -translate-x-1/2`}>
          {message}
          <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      ) : position === "left" ? (
        <div className={`${bubbleClass} absolute top-1/2 left-full transform -translate-y-1/2`}>
          {message}
          <div className="absolute top-1/2 left-[-6px] transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-white"></div>
        </div>
      ) : position === "right" ? (
        <div className={`${bubbleClass} absolute top-1/2 right-full transform -translate-y-1/2`}>
          {message}
          <div className="absolute top-1/2 right-[-6px] transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-white"></div>
        </div>
      ) : (
        <div className={`${bubbleClass} absolute left-1/2 transform -translate-x-1/2`}>
          {message}
          <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
      )}

      {/* Robot */}
      <div className="w-full h-full">
        <Spline scene="https://prod.spline.design/Bsk3y3-ep8BPJiwJ/scene.splinecode" />
      </div>
    </div>
  );
};

export default SplineRobo;