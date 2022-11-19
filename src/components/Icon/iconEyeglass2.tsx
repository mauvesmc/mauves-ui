import { Component, ComponentProps } from "solid-js";

export const IconEyeglass2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4" />
    <circle cx="17.5" cy="16.5" r="3.5" />
    <circle cx="6.5" cy="16.5" r="3.5" />
  </svg>
);
