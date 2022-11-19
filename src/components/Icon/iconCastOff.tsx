import { Component, ComponentProps } from "solid-js";

export const IconCastOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 19h.01M7 19a4 4 0 0 0-4-4M11 19a8 8 0 0 0-8-8M15 19h3a3 3 0 0 0 .875-.13m1.997-2.002A3 3 0 0 0 21 16V8a3 3 0 0 0-3-3H9m-3.865.136A3 3 0 0 0 3.2 7M3 3l18 18" />
  </svg>
);
