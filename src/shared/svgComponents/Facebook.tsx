import React from "react";

interface IProps {
  width: string;
  height: string;
  className?: string;
}

export const Facebook = ({ width, height, className }: IProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 33 32"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.5 16.0893C0.5 24.044 6.27733 30.6587 13.8333 32V20.444H9.83333V16H13.8333V12.444C13.8333 8.444 16.4107 6.22267 20.056 6.22267C21.2107 6.22267 22.456 6.4 23.6107 6.57733V10.6667H21.5667C19.6107 10.6667 19.1667 11.644 19.1667 12.8893V16H23.4333L22.7227 20.444H19.1667V32C26.7227 30.6587 32.5 24.0453 32.5 16.0893C32.5 7.24 25.3 0 16.5 0C7.7 0 0.5 7.24 0.5 16.0893Z"
      />
    </svg>
  );
};
