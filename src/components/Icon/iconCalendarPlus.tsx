import { Component, ComponentProps } from "solid-js";

export const IconCalendarPlus: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="16" height="16" x="4" y="5" rx="2" />
    <path d="M16 3v4M8 3v4M4 11h16M10 16h4M12 14v4" />
  </svg>
);
