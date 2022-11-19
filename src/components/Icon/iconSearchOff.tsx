import { Component, ComponentProps } from "solid-js";

export const IconSearchOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5.039 5.062a7 7 0 0 0 9.91 9.89m1.584-2.434a7 7 0 0 0-9.038-9.057M3 3l18 18" />
  </svg>
);
