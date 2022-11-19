import { Component, ComponentProps } from "solid-js";

export const IconPokerChip: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M18.364 5.636l-2.828 2.828M8.464 15.536l-2.828 2.828M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828" />
  </svg>
);
