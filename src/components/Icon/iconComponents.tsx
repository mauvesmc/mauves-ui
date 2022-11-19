import { Component, ComponentProps } from "solid-js";

export const IconComponents: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 12 3 3 3-3-3-3zM15 12l3 3 3-3-3-3zM9 6l3 3 3-3-3-3zM9 18l3 3 3-3-3-3z" />
  </svg>
);
