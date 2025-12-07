import React from 'react';

const Logo = ({ className = "w-10 h-10" }) => {
    return (
        <svg viewBox="0 0 120 120" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* 3D Cube with exact proportions from image */}
            <g>
                {/* Top face - darker purple */}
                <path
                    d="M 60 25 L 90 42 L 60 59 L 30 42 Z"
                    fill="#4338CA"
                    stroke="none"
                />

                {/* Left face - darkest purple with waveforms */}
                <path
                    d="M 30 42 L 30 78 L 60 95 L 60 59 Z"
                    fill="#3730A3"
                    stroke="none"
                />

                {/* Right face - lighter beige/cream with text */}
                <path
                    d="M 60 59 L 60 95 L 90 78 L 90 42 Z"
                    fill="#E8E3D8"
                    stroke="none"
                />

                {/* Waveform lines on left face - glowing blue/purple */}
                <g opacity="0.9">
                    {/* First waveform */}
                    <path
                        d="M 35 52 L 36 50 L 37 52 L 38 50 L 39 52 L 40 50 L 41 52 L 42 50 L 43 52 L 44 50 L 45 52 L 46 50 L 47 52 L 48 50 L 49 52 L 50 50 L 51 52 L 52 50 L 53 52"
                        stroke="#8B7FFF"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinecap="round"
                    />
                    {/* Second waveform */}
                    <path
                        d="M 35 60 L 36 58 L 37 60 L 38 58 L 39 60 L 40 58 L 41 60 L 42 58 L 43 60 L 44 58 L 45 60 L 46 58 L 47 60 L 48 58 L 49 60 L 50 58 L 51 60 L 52 58 L 53 60"
                        stroke="#7B6FFF"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.8"
                    />
                    {/* Third waveform */}
                    <path
                        d="M 35 68 L 36 66 L 37 68 L 38 66 L 39 68 L 40 66 L 41 68 L 42 66 L 43 68 L 44 66 L 45 68 L 46 66 L 47 68 L 48 66 L 49 68 L 50 66 L 51 68 L 52 66 L 53 68"
                        stroke="#6B5FFF"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.6"
                    />
                </g>

                {/* "you" text on right face - dark purple */}
                <text
                    x="75"
                    y="72"
                    fill="#3730A3"
                    fontSize="14"
                    fontWeight="700"
                    fontFamily="Arial, sans-serif"
                    textAnchor="middle"
                    transform="skewY(-8)"
                >
                    you
                </text>
            </g>

            {/* Film/Media Icon on top right corner - attached to cube */}
            <g transform="translate(82, 28)">
                {/* Film strip background */}
                <rect
                    x="0"
                    y="0"
                    width="24"
                    height="20"
                    rx="2"
                    fill="#7C6FDD"
                    stroke="none"
                />

                {/* Film strip perforations - left side */}
                <rect x="2" y="2" width="2.5" height="2.5" rx="0.5" fill="#4338CA" />
                <rect x="2" y="6" width="2.5" height="2.5" rx="0.5" fill="#4338CA" />
                <rect x="2" y="10" width="2.5" height="2.5" rx="0.5" fill="#4338CA" />
                <rect x="2" y="14" width="2.5" height="2.5" rx="0.5" fill="#4338CA" />

                {/* Film strip perforations - right side */}
                <rect x="19.5" y="2" width="2.5" height="2.5" rx="0.5" fill="#4338CA" />
                <rect x="19.5" y="6" width="2.5" height="2.5" rx="0.5" fill="#4338CA" />
                <rect x="19.5" y="10" width="2.5" height="2.5" rx="0.5" fill="#4338CA" />
                <rect x="19.5" y="14" width="2.5" height="2.5" rx="0.5" fill="#4338CA" />

                {/* Film frames - center area */}
                <rect x="6" y="3" width="12" height="5" rx="0.5" fill="#5B4FDD" opacity="0.6" />
                <rect x="6" y="11" width="12" height="5" rx="0.5" fill="#5B4FDD" opacity="0.6" />
            </g>
        </svg>
    );
};

export default Logo;
