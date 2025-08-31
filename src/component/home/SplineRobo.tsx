import React, { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SplineRobo = () => {
  const robotWrapperRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState("👋 Hello from Hero Section!");

  useEffect(() => {
    const sections = [
      {
        id: "#hero",
        position: "center",
        msg: "👋 Hello from Hero Section!",
      },
      {
        id: "#techstack",
        position: "center",
        msg: "🧠 Exploring Tech Stack",
      },
      {
        id: "#services",
        position: "left",
        msg: "🛠️ Diving into Services",
      },
      {
        id: "#success",
        position: "right",
        msg: "💬 Reading Testimonials",
      },
      {
        id: "#catego",
        position: "right",
        msg: "📦 Browsing Categories",
      },
      {
        id: "#client",
        position: "left",
        msg: "🤝 Meeting Clients",
      },
      {
        id: "#footer",
        position: "right",
        msg: "👋 Goodbye from Footer!",
      },
    ];

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section.id,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          let xTransform = "translateX(-50%)";
          let left = "50%";

          if (section.position === "left") {
            xTransform = "none";
            left = "200px";
          } else if (section.position === "right") {
            xTransform = "none";
            left = "calc(100% - 200px)";
          }

          gsap.to(robotWrapperRef.current, {
            left,
            transform: `translateY(-50%) ${xTransform}`,
            duration: 0.8,
            ease: "power2.out",
          });

          setMessage(section.msg);
        },
      });
    });
  }, []);

  return (
    <>
      {/* Robot + Message wrapper */}
      <div
        ref={robotWrapperRef}
        className="fixed top-1/2 z-40 w-40 h-40 pointer-events-none"
        style={{
          left: "50%",
          transform: "translateY(-50%) translateX(-50%)",
        }}
      >
        {/* Message aligned above robot */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-lg text-sm whitespace-nowrap">
          {message}
        </div>

        {/* Robot itself */}
        <div className="w-full h-full">
          <Spline scene="https://prod.spline.design/Bsk3y3-ep8BPJiwJ/scene.splinecode" />
        </div>
      </div>
    </>
  );
};

export default SplineRobo;