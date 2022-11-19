import { Component, ComponentProps } from "solid-js";

export const IconArmchair2Off: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 10V6a3 3 0 0 1 .128-.869m2.038-2.013C7.43 3.04 7.71 3 8 3h8a3 3 0 0 1 3 3v4" />
    <path d="M16.124 12.145a3.001 3.001 0 1 1 3.756 3.724M19 19H5v-3a3 3 0 1 1 3-3v2M8 12h4M7 19v2M17 19v2M3 3l18 18" />
  </svg>
);
