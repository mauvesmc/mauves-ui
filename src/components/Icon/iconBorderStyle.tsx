import { Component, ComponentProps } from "solid-js";

export const IconBorderStyle: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 20V6a2 2 0 0 1 2-2h14M20 8v.01M20 12v.01M20 16v.01M8 20v.01M12 20v.01M16 20v.01M20 20v.01" />
  </svg>
);
