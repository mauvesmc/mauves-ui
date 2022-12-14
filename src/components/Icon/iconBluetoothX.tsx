import { Component, ComponentProps } from "solid-js";

export const IconBluetoothX: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m7 8 10 8-5 4V4l1.003.802m0 6.396L7 16M16 6l4 4M20 6l-4 4" />
  </svg>
);
