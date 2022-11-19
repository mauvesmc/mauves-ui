import { Component, ComponentProps } from "solid-js";

export const IconGripHorizontal: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="5" cy="9" r="1" />
    <circle cx="5" cy="15" r="1" />
    <circle cx="12" cy="9" r="1" />
    <circle cx="12" cy="15" r="1" />
    <circle cx="19" cy="9" r="1" />
    <circle cx="19" cy="15" r="1" />
  </svg>
);
