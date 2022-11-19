import { Component, ComponentProps } from "solid-js";

export const IconCalendarOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19.823 19.824A2 2 0 0 1 18 21H6a2 2 0 0 1-2-2V7a2 2 0 0 1 1.175-1.823M9 5h9a2 2 0 0 1 2 2v9M16 3v4M8 3v1M4 11h7m4 0h5M11 15h1M12 15v3M3 3l18 18" />
  </svg>
);
