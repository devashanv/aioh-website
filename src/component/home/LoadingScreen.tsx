import React from 'react'

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <svg
        className="w-5 h-5 rotate-[-60deg]" // Smaller size + 1 o'clock start
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Static white ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="white"
          strokeWidth="6"
          fill="none"
        />

        {/* Animated gradient stroke with rounded ends */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#tailwindGradient)"
          strokeWidth="10"
          fill="none"
          strokeDasharray="282.6"
          strokeDashoffset="282.6"
          strokeLinecap="round"
          style={{
            animation: 'fillRing75 2.5s ease forwards',
            transformOrigin: 'center',
            transformBox: 'fill-box',
          }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="tailwindGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#078bd6" />
            <stop offset="50%" stopColor="#02cbb9" />
            <stop offset="100%" stopColor="#02ec97" />
          </linearGradient>
        </defs>
      </svg>

      <style>
        {`
          @keyframes fillRing75 {
            to {
              stroke-dashoffset: 70.65;
            }
          }
        `}
      </style>
    </div>
  )
}

export default LoadingScreen