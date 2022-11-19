import { Component, ComponentProps } from "solid-js";

export const IconCeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 4a7.99 7.99 0 0 0-2.581.426M5.867 5.864A8 8 0 0 0 11 20M20 4a8.001 8.001 0 0 0-7.29 4.7M12 12a8 8 0 0 0 8 8M16 12h4M3 3l18 18" />
  </svg>
);
