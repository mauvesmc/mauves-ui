import { Component, ComponentProps } from "solid-js";

export const IconTimeline: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m4 16 6-7 5 5 5-6" />
    <circle cx="15" cy="14" r="1" />
    <circle cx="10" cy="9" r="1" />
    <circle cx="4" cy="16" r="1" />
    <circle cx="20" cy="8" r="1" />
  </svg>
);
