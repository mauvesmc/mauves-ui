import { Component, ComponentProps } from "solid-js";

export const IconZzzOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 12h6l-6 8h6M14 4h6l-5.146 6.862M16 12h4M3 3l18 18" />
  </svg>
);
