import { Component, ComponentProps } from "solid-js";

export const IconCurrencyDinar: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14 20.01V20M6 13l2.386-.9a1 1 0 0 0-.095-1.902l-1.514-.404a1 1 0 0 1-.102-1.9L9 7" />
    <path d="M3 14v1a3 3 0 0 0 3 3h4.161a3 3 0 0 0 2.983-3.32L12 4M16 17l1 1h2.004a2 2 0 0 0 1.649-3.131L18 11" />
  </svg>
);
