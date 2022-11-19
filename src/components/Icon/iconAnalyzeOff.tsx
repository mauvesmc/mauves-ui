import { Component, ComponentProps } from "solid-js";

export const IconAnalyzeOff: Component<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 11a8.1 8.1 0 0 0-6.986-6.918 8.086 8.086 0 0 0-4.31.62M6.321 6.31A8.089 8.089 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 13.687 4.676M20 16a1 1 0 0 0-1-1" />
    <circle cx="5" cy="8" r="1" />
    <path d="M9.888 9.87a3 3 0 1 0 4.233 4.252m.595-3.397A3.012 3.012 0 0 0 13.29 9.29M3 3l18 18" />
  </svg>
);
