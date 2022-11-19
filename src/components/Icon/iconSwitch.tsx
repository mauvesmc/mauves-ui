import { Component, ComponentProps } from "solid-js";

export const IconSwitch: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 4h4v4M14.75 9.25 19 4M5 19l4-4M15 19h4v-4M5 5l14 14" />
  </svg>
);
