import React from "react";

const items = [
  "Digital Marketing",
  "Software Development",
  "Video Creation",
  "Web Application Development",
];

const RibbonSlider: React.FC = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="ribbon-animate-scroll flex p-5">
        {/* duplicate twice inside */}
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-6 text-xl font-medium whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RibbonSlider;
