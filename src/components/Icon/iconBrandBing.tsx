import { Component, ComponentProps } from "solid-js";

export const IconBrandBing: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m5 3 4 1.5v12l6-2.5-2-1-1-4 7 2.5V16L9 21l-4-2z" />
  </svg>
);
