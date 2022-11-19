import { Component, ComponentProps } from "solid-js";

export const IconSunset2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 13h1M20 13h1M5.6 6.6l.7.7M18.4 6.6l-.7.7M8 13a4 4 0 1 1 8 0M3 17h18M7 20h5M16 20h1M12 5V4" />
  </svg>
);
