import { Component, ComponentProps } from "solid-js";

export const IconMathMin: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
    <path d="M3 4c0 8.75 4 14 7 14.5M14 18.5c3-.5 7-5.75 7-14.5" />
  </svg>
);
