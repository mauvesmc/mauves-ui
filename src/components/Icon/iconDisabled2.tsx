import { Component, ComponentProps } from "solid-js";

export const IconDisabled2: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="17" cy="6" r="2" />
    <path d="M9 11a5 5 0 1 0 3.95 7.95" />
    <path d="m19 20-4-5h-4l3-5-4-3-4 1" />
  </svg>
);
