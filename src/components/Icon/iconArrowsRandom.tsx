import { Component, ComponentProps } from "solid-js";

export const IconArrowsRandom: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 21.004h-4v-4M16 21.004l5-5M6.5 9.504l-3.5-2L5 4M3 7.504l6.83-1.87M4 16.004l4-1 1 4M8 15.004l-3.5 6M21 5.004l-.5 4-4-.5M20.5 9.004l-4.5-5.5" />
  </svg>
);
