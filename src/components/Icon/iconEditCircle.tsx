import { Component, ComponentProps } from "solid-js";

export const IconEditCircle: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m12 15 8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" />
    <path d="M9 7.07A7.002 7.002 0 0 0 10 21a7.002 7.002 0 0 0 6.929-5.999" />
  </svg>
);
