import { Component, ComponentProps } from "solid-js";

export const IconSquareF5: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 6.667v10.666A2.667 2.667 0 0 1 17.333 20H6.667A2.667 2.667 0 0 1 4 17.333V6.667A2.667 2.667 0 0 1 6.667 4h10.666A2.667 2.667 0 0 1 20 6.667z" />
    <path d="M13 14.25c0 .414.336.75.75.75H15a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2V9h3M8 12h2M10 9H8v6" />
  </svg>
);
