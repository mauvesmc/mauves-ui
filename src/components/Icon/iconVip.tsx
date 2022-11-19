import { Component, ComponentProps } from "solid-js";

export const IconVip: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 5h18M3 19h18M4 9l2 6h1l2-6M12 9v6M16 15V9h2a2 2 0 1 1 0 4h-2" />
  </svg>
);
