import { Component, ComponentProps } from "solid-js";

export const IconBone: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 3a3 3 0 0 1 3 3 3 3 0 1 1-2.12 5.122l-4.758 4.758a3 3 0 1 1-5.117 2.297L6 18l-.176-.005a3 3 0 1 1 2.298-5.115l4.758-4.758A3 3 0 0 1 15 3z" />
  </svg>
);
