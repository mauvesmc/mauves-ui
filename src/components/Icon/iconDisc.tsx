import { Component, ComponentProps } from "solid-js";

export const IconDisc: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="1" />
    <path d="M7 12a5 5 0 0 1 5-5M12 17a5 5 0 0 0 5-5" />
  </svg>
);
