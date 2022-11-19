import { Component, ComponentProps } from "solid-js";

export const IconArmchairOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 13a2 2 0 1 1 4 0v4m-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 1 1 4 0v2h8.036" />
    <path d="M5 11V6a3 3 0 0 1 .134-.89m1.987-1.98A3 3 0 0 1 8 3h8a3 3 0 0 1 3 3v5M6 19v2M18 19v2M3 3l18 18" />
  </svg>
);
