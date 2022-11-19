import { Component, ComponentProps } from "solid-js";

export const IconAnchor: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 9v12m-8-8a8 8 0 0 0 16 0m1 0h-2M5 13H3" />
    <circle cx="12" cy="6" r="3" />
  </svg>
);
