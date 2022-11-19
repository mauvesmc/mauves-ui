import { Component, ComponentProps } from "solid-js";

export const IconPlantOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 17v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4h8M11.9 7.908a6.006 6.006 0 0 0-4.79-4.806M3 3v2a6 6 0 0 0 6 6h2M12.531 8.528A6.001 6.001 0 0 1 18 5h3v1a6.002 6.002 0 0 1-5.037 5.923M12 15v-3M3 3l18 18" />
  </svg>
);
