import React from "react";

interface IProps {
  className?: string;
}

export const Ellipses = ({ className }: IProps) => {
  return (
      <svg
          viewBox="0 0 500 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    //   width="580"
    //   height="400"
    >
      <path fill="none" />
      <circle
        cx="0"
        cy="0"
        r="30"
        fill="none"
        stroke="#204FFE"
        strokeWidth="2"
      />
      <ellipse
        cx="0"
        cy="0"
        fill="none"
        stroke="#204FFE"
        strokeWidth="2"
        rx="35"
        ry="80"
        transform="rotate(90 290 200)"
      />
      <ellipse
        cx="0"
        cy="0"
        fill="none"
        stroke="#204FFE"
        strokeWidth="2"
        rx="0"
        ry="0"
        transform="rotate(90 290 200)"
      />
      <ellipse
        cx="0"
        cy="0"
        fill="none"
        stroke="#204FFE"
        strokeWidth="2"
        rx="70"
        ry="120"
        transform="rotate(90 290 200)"
      />
      <ellipse
        cx="0"
        cy="0"
        fill="none"
        stroke="#204FFE"
        strokeWidth="2"
        rx="0"
        ry="0"
        transform="rotate(90 290 200)"
      />
      <ellipse
        cx="0"
        cy="0"
        fill="none"
        stroke="#204FFE"
        strokeWidth="2"
        rx="90"
        ry="160"
        transform="rotate(90 290 200)"
      />
    </svg>
  );
};
