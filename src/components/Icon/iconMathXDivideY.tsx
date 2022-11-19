import { Component, ComponentProps } from "solid-js";

export const IconMathXDivideY: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m9 3 6 6M9 9l6-6M9 15l3 4.5M15 15l-4.5 7M5 12h14" />
  </svg>
);
