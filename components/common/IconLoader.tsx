import React from 'react';

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="#222" />
    <g transform="scale(0.8) translate(13,13)">
      <path
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="miter"
        d="M 11, 30
                  L 29, 48
                  L 9, 69
                  L 42, 69 
                  C 53, 62, 46, 49, 40, 48
                  L 29, 48 
                  L 42, 48 
                  C 51, 45, 51, 34, 42, 30
                  L 11, 30 z"
      />
      <path
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="miter"
        d="M 58, 30
                  L 89, 30
                  L 51, 69
                  L 83, 69
                  C 93, 63, 90, 53, 82, 48
                  L 58, 48
                  C 50, 44, 50, 35, 58, 30 z"
      />
    </g>
  </svg>
);

export default IconLoader;
