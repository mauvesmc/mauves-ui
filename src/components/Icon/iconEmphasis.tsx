import { Component, ComponentProps } from "solid-js";

export const IconEmphasis: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 5H8v10h8m-1-5H8M6 20v.01M10 20v.01M14 20v.01M18 20v.01" />
  </svg>
);
