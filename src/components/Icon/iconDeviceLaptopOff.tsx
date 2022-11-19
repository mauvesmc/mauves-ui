import { Component, ComponentProps } from "solid-js";

export const IconDeviceLaptopOff: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M3 19h16M10 6h8a1 1 0 0 1 1 1v8m-3 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1M3 3l18 18" />
  </svg>
);
