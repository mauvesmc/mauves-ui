import { Component, ComponentProps } from "solid-js";

export const IconHomeUp: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 21v-6a2 2 0 0 1 2-2h2c.641 0 1.212.302 1.578.771" />
    <path d="M20.136 11.136 12 3l-9 9h2v7a2 2 0 0 0 2 2h6.344M19 22v-6M22 19l-3-3-3 3" />
  </svg>
);
