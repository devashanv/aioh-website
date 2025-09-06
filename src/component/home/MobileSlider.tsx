import { useEffect, useRef, useState } from 'react';
import TestProject from '../../assets/img/test-project.webp';

const rawProjects = [
  { title: 'Project One', description: 'Description for project one' },
  { title: 'Project Two', description: 'Description for project two' },
  { title: 'Project Three', description: 'Description for project three' },
  { title: 'Project Four', description: 'Description for project four' },
  { title: 'Project Five', description: 'Description for project five' },
];

// Clone first and last items for infinite loop
const projects = [
  rawProjects[rawProjects.length - 1],
  ...rawProjects,
  rawProjects[0],
];

export default function MobileSlider() {
  const [index, setIndex] = useState(1); // Start at first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === projects.length - 1) {
      // Reached clone of first slide
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1); // Jump to real first slide
      }, 700);
    } else if (index === 0) {
      // Reached clone of last slide
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(projects.length - 2); // Jump to real last slide
      }, 700);
    } else {
      setIsTransitioning(true);
    }
  }, [index]);

  const getTransform = () => {
    return `translateX(-${(index - 1) * 33.3333}%)`; // Center active slide
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
        style={{ transform: getTransform() }}
      >
        {projects.map((project, i) => {
          const isActive = i === index;
          return (
            <div
              key={i}
              className={`w-1/3 flex-shrink-0 px-2 transition-all duration-700 ease-in-out
                ${isActive ? 'scale-115 opacity-100 z-10' : 'scale-95 opacity-60 z-0'}
              `}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg h-full flex flex-col justify-center items-center text-center">
                <img src={TestProject} alt={project.title} className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}