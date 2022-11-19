import { Component, ComponentProps } from "solid-js";

export const IconHammerOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10.698 10.72 4.03 17.418a2.091 2.091 0 0 0 0 2.967 2.11 2.11 0 0 0 2.976 0l6.696-6.676M18.713 14.702l1.994-1.995a1 1 0 0 0 0-1.414l-7.586-7.586a1 1 0 0 0-1.414 0L9.708 5.706M3 3l18 18" />
  </svg>
);
