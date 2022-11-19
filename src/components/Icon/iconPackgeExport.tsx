import { Component, ComponentProps } from "solid-js";

export const IconPackgeExport: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m12 21-8-4.5v-9L12 3l8 4.5V12M12 12l8-4.5M12 12v9M12 12 4 7.5M15 18h7M19 15l3 3-3 3" />
  </svg>
);
