import { Component, ComponentProps } from "solid-js";

export const IconClockPause: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13 20.94a8.916 8.916 0 0 1-7.364-2.576 9 9 0 1 1 15.306-5.342" />
    <path d="M12 7v5l2 2M17 17v5M21 17v5" />
  </svg>
);
