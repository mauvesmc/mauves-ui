import { Component, ComponentProps } from "solid-js";

export const IconCellSignalOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 20H4.731a.731.731 0 0 1-.517-1.249l7.265-7.264m2-2.001 5.272-5.272A.731.731 0 0 1 20 4.731V16M3 3l18 18" />
  </svg>
);