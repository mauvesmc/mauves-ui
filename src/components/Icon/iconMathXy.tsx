import { Component, ComponentProps } from "solid-js";

export const IconMathXy: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m14 9 3 5.063M4 9l6 6M4 15l6-6M20 9l-4.8 9" />
  </svg>
);
