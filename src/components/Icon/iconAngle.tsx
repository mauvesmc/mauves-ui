import { Component, ComponentProps } from "solid-js";

export const IconAngle: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M21 19H3l9-15M20.615 15.171h.015M19.515 11.771h.015M17.715 8.671h.015M15.415 5.971h.015" />
  </svg>
);
