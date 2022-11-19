import { Component, ComponentProps } from "solid-js";

export const IconDevicesPcOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 9v10H3V5h2M13 9h9v7h-2m-4 0h-4v-4M14 19h5M17 17v2M6 13v.01M6 16v.01M3 3l18 18" />
  </svg>
);
