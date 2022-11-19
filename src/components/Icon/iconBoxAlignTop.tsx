import { Component, ComponentProps } from "solid-js";

export const IconBoxAlignTop: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 9.505h16v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v5zM4 14.505v-.01M4 19.505v-.01M9 19.505v-.01M15 19.505v-.01M20 19.505v-.01M20 14.505v-.01" />
  </svg>
);
