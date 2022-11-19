import { Component, ComponentProps } from "solid-js";

export const IconBallon: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14 8a2 2 0 0 0-2-2" />
    <path d="M6 8a6 6 0 1 1 12 0c0 4.97-2.686 9-6 9s-6-4.03-6-9M12 17v1a2 2 0 0 1-2 2H7a2 2 0 0 0-2 2" />
  </svg>
);
