import { Component, ComponentProps } from "solid-js";

export const IconTeapot: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10.29 3h3.42a2 2 0 0 1 1.988 1.78l1.555 14A2 2 0 0 1 15.265 21h-6.53a2 2 0 0 1-1.988-2.22l1.555-14A2 2 0 0 1 10.29 3z" />
    <path d="M7.47 12.5 3.213 7.481A.899.899 0 0 1 3.903 6h13.09A3.004 3.004 0 0 1 20 9v3c0 1.657-1.346 3-3.007 3M7 17h10" />
  </svg>
);
