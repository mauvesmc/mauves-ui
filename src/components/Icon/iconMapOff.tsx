import { Component, ComponentProps } from "solid-js";

export const IconMapOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.32 4.34 9 4l6 3 6-3v13m-2.67 1.335L15 20l-6-3-6 3V7l2.665-1.333M9 4v1m0 4v8M15 7v4m0 4v5M3 3l18 18" />
  </svg>
);
