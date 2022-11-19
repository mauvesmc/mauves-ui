import { Component, ComponentProps } from "solid-js";

export const IconCodeCircle: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m10 14-2-2 2-2M14 10l2 2-2 2" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);
