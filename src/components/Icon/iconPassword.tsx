import { Component, ComponentProps } from "solid-js";

export const IconPassword: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 10v4M10 13l4-2M10 11l4 2M5 10v4M3 13l4-2M3 11l4 2M19 10v4M17 13l4-2M17 11l4 2" />
  </svg>
);
