import { Component, ComponentProps } from "solid-js";

export const IconBrandBulma: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m5 16 1-9 5-5 6.5 6-3.5 4 5 5-8 5z" />
  </svg>
);
