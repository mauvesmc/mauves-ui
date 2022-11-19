import { Component, ComponentProps } from "solid-js";

export const IconCylinder: Component<ComponentProps<"svg">> = (props) => (
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
    <ellipse cx="12" cy="6" rx="5" ry="3" />
    <path d="M7 6v12c0 1.657 2.239 3 5 3s5-1.343 5-3V6" />
  </svg>
);
