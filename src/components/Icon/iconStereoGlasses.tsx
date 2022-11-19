import { Component, ComponentProps } from "solid-js";

export const IconStereoGlasses: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 3H6l-3 9M16 3h2l3 9M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707-.293l2-2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707.293H20a1 1 0 0 0 1-1v-7H3zM7 16h1M16 16h1" />
  </svg>
);
