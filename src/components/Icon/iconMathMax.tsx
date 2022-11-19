import { Component, ComponentProps } from "solid-js";

export const IconMathMax: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="5" r="2" />
    <path d="M3 20c0-8.75 4-14 7-14.5m4 0c3 .5 7 5.75 7 14.5" />
  </svg>
);
