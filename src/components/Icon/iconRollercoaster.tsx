import { Component, ComponentProps } from "solid-js";

export const IconRollercoaster: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.775 8.775 0 0 1 8.325-6H21M20 9v12M8 21v-3M12 21V11M16 9.5V21M15 3h5v3h-5zM6 8l4-3 2 2.5-4 3-1.8-.5z" />
  </svg>
);
