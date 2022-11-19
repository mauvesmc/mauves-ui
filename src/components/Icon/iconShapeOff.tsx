import { Component, ComponentProps } from "solid-js";

export const IconShapeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3.575 3.597a2 2 0 0 0 2.849 2.808" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="19" r="2" />
    <path d="M17.574 17.598a2 2 0 0 0 2.826 2.83M5 7v10M9 5h8M7 19h10M19 7v8M3 3l18 18" />
  </svg>
);
