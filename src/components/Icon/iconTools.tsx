import { Component, ComponentProps } from "solid-js";

export const IconTools: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 21h4L20 8a1.5 1.5 0 0 0-4-4L3 17v4M14.5 5.5l4 4" />
    <path d="M12 8 7 3 3 7l5 5M7 8 5.5 9.5M16 12l5 5-4 4-5-5M16 17l-1.5 1.5" />
  </svg>
);
