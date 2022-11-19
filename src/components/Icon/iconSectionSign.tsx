import { Component, ComponentProps } from "solid-js";

export const IconSectionSign: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9.172 19.004A3.001 3.001 0 1 0 12 15M14.83 5.002A3.001 3.001 0 1 0 12 9" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
