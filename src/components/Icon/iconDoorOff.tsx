import { Component, ComponentProps } from "solid-js";

export const IconDoorOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 21h18M6 21V6M7.18 3.175C7.43 3.063 7.708 3 8 3h8a2 2 0 0 1 2 2v9M18 18v3M3 3l18 18" />
  </svg>
);
