import { Component, ComponentProps } from "solid-js";

export const IconGizmo: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m20 19-8-5.5L4 19M12 4v9.5" />
    <circle cx="12" cy="4" r="1" />
    <circle cx="4" cy="19" r="1" />
    <circle cx="20" cy="19" r="1" />
  </svg>
);
