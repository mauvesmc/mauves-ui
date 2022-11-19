import { Component, ComponentProps } from "solid-js";

export const IconFountainOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 16v-5a2 2 0 1 0-4 0M15 16v-1m0-4a2 2 0 1 1 4 0M12 16v-4m0-4V6a3 3 0 0 1 6 0" />
    <path d="M7.451 3.43A3 3 0 0 1 12 6M20 16h1v1m-.871 3.114A2.99 2.99 0 0 1 18 21H6a3 3 0 0 1-3-3v-2h13M3 3l18 18" />
  </svg>
);
