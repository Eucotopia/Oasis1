import React from "react";

export const LikeIcon = ({ size = 24, width, height, strokeWidth = 1.5, fill = "none", ...props }) => (
    <svg
        aria-hidden="true"
        fill={fill}
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
    >
        <path
            d="M12 20.84C8.44 18.84 2 14.69 2 8.69C2 5.59 4.49 3.09 7.56 3.09C9.39 3.09 11 3.97 12 5.34C13 3.97 14.61 3.09 16.44 3.09C19.51 3.09 22 5.59 22 8.69C22 14.69 15.56 18.84 12 20.84Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
        />
        <path
            d="M12 17V7"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
        />
        <path
            d="M7 12H17"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
        />
    </svg>
);
