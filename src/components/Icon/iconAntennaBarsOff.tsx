import { Component, ComponentProps } from "solid-js";

export const IconAntennaBarsOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 18v-3M10 18v-6M14 18v-4M14 10V9M18 14V6M3 3l18 18" />
  </svg>
);
