import { Component, ComponentProps } from "solid-js";

export const IconBong: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13 3v8.416c.134.059.265.123.393.193L17 8l2 2-3.608 3.608A5 5 0 1 1 9 11.416V3h4zM8 3h6M6.1 17h9.8" />
  </svg>
);
