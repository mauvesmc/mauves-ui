import { Component, ComponentProps } from "solid-js";

export const IconBounceRight: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 15.5c3-1 5.5-.5 8 4.5.5-3 1.5-5.5 3-8M18 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
  </svg>
);
