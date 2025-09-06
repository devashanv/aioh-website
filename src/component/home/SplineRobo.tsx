import { useLayoutEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Section = {
  id: string;
  position: "left" | "center" | "right";
  scale: number;
  customLeft?: string;
};

const SplineRobo = () => {
  const robotWrapperRef = useRef<HTMLDivElement>(null);

  const sections: Section[] = [
    { id: "#hero", position: "right", scale: 0.6 },
    { id: "#techstack", position: "center", scale: 0.7 },
    { id: "#services", position: "left", scale: 3.2, customLeft: "calc(100% - 350px)" },
    { id: "#success", position: "right", scale: 0.9, customLeft: "calc(100% - 350px)" },
    { id: "#catego", position: "right", scale: 1.0, customLeft: "calc(100% - 300px)" },
    // Skipping #client and #footer for robot animation
  ];

  useLayoutEffect(() => {
    const heroSection = sections[0];
    const initialLeft = heroSection.customLeft || "calc(100% - 350px)";
    const initialTransform = `translateY(-60%) scale(${heroSection.scale})`;

    if (robotWrapperRef.current) {
      robotWrapperRef.current.style.left = initialLeft;
      robotWrapperRef.current.style.transform = initialTransform;
      robotWrapperRef.current.style.opacity = "1";
    }

    const triggers = sections.map((section) => {
      const trigger = document.querySelector(section.id);
      if (!trigger) return null;

      return ScrollTrigger.create({
        trigger: section.id,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          if (section.id !== "#catego") {
            fadeInRobot();
            animateRobot(section);
          }
        },
        onEnterBack: () => {
          if (section.id !== "#catego") {
            fadeInRobot();
            animateRobot(section);
          }
        },
      });
    });

    // Dedicated fade logic for #catego midpoint
    const categoFadeTrigger = ScrollTrigger.create({
      trigger: "#catego",
      start: "center center",
      end: "bottom center",
      onEnter: () => fadeOutRobot(), 
      onLeaveBack: () => fadeInRobot(), 
    });

    function fadeOutRobot() {
      if (robotWrapperRef.current) {
        gsap.to(robotWrapperRef.current, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        });
      }
    }

    function fadeInRobot() {
      if (robotWrapperRef.current) {
        gsap.to(robotWrapperRef.current, {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
        });
      }
    }

    function animateRobot(section: Section) {
      let left = "50%";
      let xTransform = "translateX(-50%)";
      let yTransform = "translateY(-60%)";

      if (section.id === "#catego") {
        left = section.customLeft || "calc(100% - 300px)";
        xTransform = "none";
      } else if (section.position === "left") {
        left = "300px";
        xTransform = "none";
      } else if (section.position === "right") {
        left = section.customLeft || "calc(100% - 300px)";
        xTransform = "none";
      }

      gsap.to(robotWrapperRef.current, {
        left,
        transform: `${yTransform} ${xTransform} scale(${section.scale})`,
        duration: 2.0,
        ease: "power4.out",
        overwrite: "auto",
      });
    }

    return () => {
      triggers.forEach((t) => t?.kill());
      categoFadeTrigger?.kill();
    };
  }, []);

  return (
    <div
      ref={robotWrapperRef}
      className="fixed top-1/2 z-40 pointer-events-none"
      style={{
        width: "clamp(200px, 30vw, 300px)",
        height: "clamp(200px, 30vw, 300px)",
        opacity: 0,
      }}
    >
      <div className="w-full h-full">
        <Spline scene="https://prod.spline.design/Bsk3y3-ep8BPJiwJ/scene.splinecode" />
      </div>
    </div>
  );
};

export default SplineRobo;