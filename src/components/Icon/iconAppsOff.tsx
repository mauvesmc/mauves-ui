import { Component, ComponentProps } from "solid-js";

export const IconAppsOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 4h1a1 1 0 0 1 1 1v1m-.29 3.704A.997.997 0 0 1 9 10H5a1 1 0 0 1-1-1V5c0-.276.111-.525.292-.706M18 14h1a1 1 0 0 1 1 1v1m-.29 3.704A.997.997 0 0 1 19 20h-4a1 1 0 0 1-1-1v-4c0-.276.111-.525.292-.706" />
    <rect width="6" height="6" x="4" y="14" rx="1" />
    <path d="M14 7h6M17 4v6M3 3l18 18" />
  </svg>
);
