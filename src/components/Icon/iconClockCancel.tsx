import { Component, ComponentProps } from "solid-js";

export const IconClockCancel: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="19" cy="19" r="3" />
    <path d="m17 21 4-4M20.995 12.3a9 9 0 1 0-8.683 8.694" />
    <path d="M12 7v5l2 2" />
  </svg>
);
