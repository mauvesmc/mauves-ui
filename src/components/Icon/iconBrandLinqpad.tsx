import { Component, ComponentProps } from "solid-js";

export const IconBrandLinqpad: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 21h3.5l2.5-6 2.5-1 2.5 7h4l1-4.5-2-1-7-12L6 3l1.5 4 2.5.5 1 2.5-7 8z" />
  </svg>
);
