import { Component, ComponentProps } from "solid-js";

export const IconCone: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 14c3.866 0 7 1.343 7 3s-3.134 3-7 3-7-1.343-7-3 3.134-3 7-3z" />
    <path d="M19 17v-.5L12 4 5 16.5v.5" />
  </svg>
);
