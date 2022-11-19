import { Component, ComponentProps } from "solid-js";

export const IconArmchair2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 10V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" />
    <path d="M16 15v-2a3 3 0 1 1 3 3v3H5v-3a3 3 0 1 1 3-3v2M8 12h8M7 19v2M17 19v2" />
  </svg>
);
