import React from "react";

const UnplugSvgIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--title)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-unplug h-8 w-8 mb-3"
    {...props}
  >
    <path d="m19 5 3-3"></path>
    <path d="m2 22 3-3"></path>
    <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"></path>
    <path d="M7.5 13.5 10 11"></path>
    <path d="M10.5 16.5 13 14"></path>
    <path d="m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"></path>
  </svg>
);

export default UnplugSvgIcon;
