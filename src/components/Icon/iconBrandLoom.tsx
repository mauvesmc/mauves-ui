import { Component, ComponentProps } from "solid-js";

export const IconBrandLoom: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17.464 6.518a6.001 6.001 0 1 0-3.023 7.965" />
    <path d="M17.482 17.464a6.001 6.001 0 1 0-7.965-3.023" />
    <path d="M6.54 17.482a6.001 6.001 0 1 0 3.024-7.965" />
    <path d="M6.518 6.54a6.001 6.001 0 1 0 7.965 3.024" />
  </svg>
);
