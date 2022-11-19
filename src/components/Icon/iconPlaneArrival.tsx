import { Component, ComponentProps } from "solid-js";

export const IconPlaneArrival: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m15.157 11.81 4.83 1.295a2 2 0 1 1-1.036 3.863L4.462 13.086 3.117 6.514l2.898.776 1.414 2.45 2.898.776-.12-7.279 2.898.777 2.052 7.797zM3 21h18" />
  </svg>
);
