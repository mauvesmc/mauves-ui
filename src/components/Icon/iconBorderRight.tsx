import { Component, ComponentProps } from "solid-js";

export const IconBorderRight: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 4v16M4 4v.01M8 4v.01M12 4v.01M16 4v.01M4 8v.01M12 8v.01M4 12v.01M8 12v.01M12 12v.01M16 12v.01M4 16v.01M12 16v.01M4 20v.01M8 20v.01M12 20v.01M16 20v.01" />
  </svg>
);