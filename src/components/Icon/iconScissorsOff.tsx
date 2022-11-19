import { Component, ComponentProps } from "solid-js";

export const IconScissorsOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4.432 4.442a3 3 0 1 0 4.114 4.146" />
    <circle cx="6" cy="17" r="3" />
    <path d="M8.6 15.4 12 12m2-2 5-5M3 3l18 18" />
  </svg>
);
