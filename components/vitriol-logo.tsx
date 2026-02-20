import React from "react";

interface VitriolLogoProps {
  className?: string;
  size?: number;
}

export const VitriolLogo: React.FC<VitriolLogoProps> = ({ className = "", size = 40 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M50 20 L75 35 L75 65 L50 80 L25 65 L25 35 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M35 30 L50 65 L65 30"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="50" cy="25" r="3" fill="currentColor" />
      <line x1="50" y1="15" x2="50" y2="22" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path
        d="M45 68 L50 75 L55 68"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <line x1="20" y1="50" x2="27" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="73" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
};
