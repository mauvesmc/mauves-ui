import { Component, ComponentProps } from "solid-js";

export const IconZoomCode: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="10" cy="10" r="7" />
    <path d="m21 21-6-6M8 8l-2 2 2 2M12 8l2 2-2 2" />
  </svg>
);
