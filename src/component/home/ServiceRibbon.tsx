// import React from "react";

// import Circle from '../../assets/img/icons/ribbon-circle.svg'

// const items = [
//   "Digital Marketing Consulting",
//   "Web Sites Development",
//   "Social Media Management",
//   "Web Application Development",
//   "Design Solutions",
//   "Mobile App Development",
// ];

// const RibbonSlider: React.FC = () => {
//   const repeatedItems = Array(6).fill(items).flat();

//   return (
//     <div className="overflow-hidden w-full flex items-center justify-center">
//       <div className="ribbon-track flex items-center">
//         {repeatedItems.map((item, index) => (
//           <span
//             key={index}
//             className="mx-6 text-xl font-medium whitespace-nowrap flex justify-center items-center"
//           >
//             {item}
//             <img src={Circle} alt="" className="w-8 h-8 ml-5"/>
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RibbonSlider;


import React from 'react'
import Circle from '../../assets/img/icons/ribbon-circle.svg'

const RibbonSlider: React.FC = () => {
  const phrases = [
    'Digital Marketing Consulting',
    'Web Sites Development',
    'Social Media Management',
    'Web Application Development',
    'Design Solutions',
    'Mobile App Development',
  ]

  return (
    <div className="overflow-hidden whitespace-nowrap h-1/2 py-3">
      <div
        className="inline-flex animate-[scroll_20s_linear_infinite]"
        style={{ minWidth: '200%' }}
      >
        {[...phrases, ...phrases].map((text, index) => (
          <span key={index} className="mx-6 text-lg text-gray-800 flex">
            {text}
            <img src={Circle} alt="" className="w-8 h-8 ml-5"/>
          </span>
        ))}
      </div>
    </div>
  )
}

export default RibbonSlider



