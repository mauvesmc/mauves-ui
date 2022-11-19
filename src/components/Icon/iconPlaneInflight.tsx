import { Component, ComponentProps } from "solid-js";

export const IconPlaneInflight: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 11.085h5a2 2 0 1 1 0 4H5l-3-6h3l2 2h3l-2-7h3l4 7zM3 21h18" />
  </svg>
);
