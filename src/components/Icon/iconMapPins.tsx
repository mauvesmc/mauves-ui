import { Component, ComponentProps } from "solid-js";

export const IconMapPins: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10.828 9.828a4 4 0 1 0-5.656 0L8 12.657l2.828-2.829zM8 7v.01M18.828 17.828a4 4 0 1 0-5.656 0L16 20.657l2.828-2.829zM16 15v.01" />
  </svg>
);
