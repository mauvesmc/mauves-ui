import { Component, ComponentProps } from "solid-js";

export const IconGrill: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19 8H5a6 6 0 0 0 6 6h2a6 6 0 0 0 5.996-5.775L19 8zM17 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 14l1 2M9 14l-3 6M15 18H7M15 5V4M12 5V4M9 5V4" />
  </svg>
);
