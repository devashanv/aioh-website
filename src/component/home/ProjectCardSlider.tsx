import React, { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

const ProjectCardSlider: React.FC = () => {
  useEffect(() => {
    // Set initial position
    slides.forEach((_, i) => {
      gsap.set(`#slide-${i}`, {
        x: -999,
        y: -999,
      });
    });

    const timeline = gsap.timeline({ repeat: -1 });

    slides.forEach((_, i) => {
      timeline.set(`#slide-${i}`, {
        motionPath: {
          path: "#archPath",
          align: "#archPath",
          alignOrigin: [0.5, 0.5],
          start: 1,
          end: 1,
        },
      });

      timeline.to(`#slide-${i}`, {
        duration: 3,
        motionPath: {
          path: "#archPath",
          align: "#archPath",
          alignOrigin: [0.5, 0.5],
          start: 1,
          end: 0,
        },
        ease: "power1.inOut",
      }, "+=0.5"); // slight pause between slides

      timeline.set(`#slide-${i}`, {
        x: -999,
        y: -999,
      }, "+=0.2"); // hide after animation
    });
  }, []);

  return (
    <div className="relative w-[800px] h-[400px] mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* SVG Path */}
      <svg viewBox="0 0 800 400" className="absolute w-full h-full pointer-events-none">
        <path id="archPath" d="M 100 300 Q 400 100 700 300" fill="none" stroke="transparent" />
      </svg>

      {/* Slides */}
      {slides.map((text, i) => (
        <div
          key={i}
          id={`slide-${i}`}
          className="absolute w-24 h-24 text-white flex items-center justify-center rounded-full shadow-md"
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default ProjectCardSlider;