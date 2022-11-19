import { Component, ComponentProps } from "solid-js";

export const IconIconsOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4.01 4.041A3.5 3.5 0 0 0 6.5 10c.975 0 1.865-.357 2.5-1m.958-3.044a3.503 3.503 0 0 0-2.905-2.912M2.5 21h8l-4-7zM14 3l7 7M14 10l7-7M18 14h3v3m0 4h-7v-7M3 3l18 18" />
  </svg>
);
