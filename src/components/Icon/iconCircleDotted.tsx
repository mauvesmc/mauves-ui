import { Component, ComponentProps } from "solid-js";

export const IconCircleDotted: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7.5 4.21v.01M4.21 7.5v.01M3 12v.01M4.21 16.5v.01M7.5 19.79v.01M12 21v.01M16.5 19.79v.01M19.79 16.5v.01M21 12v.01M19.79 7.5v.01M16.5 4.21v.01M12 3v.01" />
  </svg>
);
