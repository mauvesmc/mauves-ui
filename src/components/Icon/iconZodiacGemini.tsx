import { Component, ComponentProps } from "solid-js";

export const IconZodiacGemini: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 3a21 21 0 0 0 18 0M3 21a21 21 0 0 1 18 0M7 4.5v15M17 4.5v15" />
  </svg>
);
