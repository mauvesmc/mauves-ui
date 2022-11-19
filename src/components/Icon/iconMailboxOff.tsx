import { Component, ComponentProps } from "solid-js";

export const IconMailboxOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 21v-6.5a3.5 3.5 0 0 0-7 0V21h18m0-4v-2a4 4 0 0 0-4-4h-2m-4 0H6.5M12 8V3h4l2 2-2 2h-4M6 15h1M3 3l18 18" />
  </svg>
);
