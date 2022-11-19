import { Component, ComponentProps } from "solid-js";

export const IconIceCream: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 21.5V17M8 17h8V7a4 4 0 1 0-8 0v10zM8 10.5 16 7M8 14.5l8-3.5" />
  </svg>
);
