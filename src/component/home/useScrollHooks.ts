import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useRobotScroll = () => {
  useEffect(() => {
    const robot = document.querySelector('.spline-robot');

    if (!robot) return;

    const sections = gsap.utils.toArray('.section');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        onEnter: () => {
          gsap.to(robot, {
            y: index * 150, // Adjust this value based on your layout
            duration: 1,
            ease: 'power2.out',
          });

          showMessage(section.id); // Call popup message
        },
      });
    });
  }, []);
};
