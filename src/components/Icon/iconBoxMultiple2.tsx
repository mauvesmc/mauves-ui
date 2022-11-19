import { Component, ComponentProps } from "solid-js";

export const IconBoxMultiple2: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="14" height="14" x="7" y="3" rx="2" />
    <path d="M17 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" />
    <path d="M12 8a2 2 0 1 1 4 0c0 .591-.417 1.318-.816 1.858L12 14.001h4" />
  </svg>
);
