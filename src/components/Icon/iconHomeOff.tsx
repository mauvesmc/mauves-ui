import { Component, ComponentProps } from "solid-js";

export const IconHomeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 12H3l4.497-4.497m1.999-1.999L12 3l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4v-3" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2m2 2v6M3 3l18 18" />
  </svg>
);
