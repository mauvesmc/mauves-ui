import { Component, ComponentProps } from "solid-js";

export const IconPlant2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M2 9a10 10 0 1 0 20 0" />
    <path d="M12 19A10 10 0 0 1 22 9M2 9a10 10 0 0 1 10 10" />
    <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5M9.01 11.5A9.7 9.7 0 0 1 12 4" />
  </svg>
);
