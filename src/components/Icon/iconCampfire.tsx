import { Component, ComponentProps } from "solid-js";

export const IconCampfire: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m4 21 16-4M20 21 4 17M12 15a4 4 0 0 0 4-4c0-3-2-3-2-8-4 2-6 5-6 8a4 4 0 0 0 4 4z" />
  </svg>
);
