import { Component, ComponentProps } from "solid-js";

export const IconHeart: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19.5 12.572 12 20l-7.5-7.428m0 0A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
  </svg>
);
