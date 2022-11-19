import { Component, ComponentProps } from "solid-js";

export const IconCarrot: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 21s9.834-3.489 12.684-6.34a4.487 4.487 0 0 0 .005-6.344 4.483 4.483 0 0 0-6.342-.005C6.487 11.172 3 21 3 21zM9 13l-1.5-1.5M16 14l-2-2M22 8s-1.14-2-3-2c-1.406 0-3 2-3 2s1.14 2 3 2 3-2 3-2z" />
    <path d="M16 2s-2 1.14-2 3 2 3 2 3 2-1.577 2-3c0-1.86-2-3-2-3z" />
  </svg>
);
