import { Component, ComponentProps } from "solid-js";

export const IconPerspective: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m6.141 4.163 12 1.714a1 1 0 0 1 .859.99v10.266a1 1 0 0 1-.859.99l-12 1.714A1 1 0 0 1 5 18.847V5.153a1 1 0 0 1 1.141-.99z" />
  </svg>
);
