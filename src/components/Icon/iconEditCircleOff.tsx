import { Component, ComponentProps } from "solid-js";

export const IconEditCircleOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10.507 10.498 9 12v3h3l1.493-1.498m2.002-2.01 4.89-4.907a2.1 2.1 0 0 0-2.97-2.97l-4.913 4.896M16 5l3 3" />
    <path d="M7.476 7.471A7.002 7.002 0 0 0 10 21a7.004 7.004 0 0 0 6.53-4.474M3 3l18 18" />
  </svg>
);
