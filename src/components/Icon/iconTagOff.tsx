import { Component, ComponentProps } from "solid-js";

export const IconTagOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7.792 7.793a1 1 0 0 0 1.414 1.414" />
    <path d="M4.88 4.877A2.99 2.99 0 0 0 4 7v3.859c0 .537.213 1.052.593 1.432l8.116 8.116a2.025 2.025 0 0 0 2.864 0l2.416-2.416m2.002-2.002.416-.416a2.025 2.025 0 0 0 0-2.864L12.29 4.593A2.025 2.025 0 0 0 10.859 4H8M3 3l18 18" />
  </svg>
);
