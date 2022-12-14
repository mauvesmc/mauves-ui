import { Component, ComponentProps } from "solid-js";

export const IconBrandPolymer: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6.706 6 3 12l3.706 6h1.059l8.47-12h1.06L21 12l-3.706 6" />
  </svg>
);
