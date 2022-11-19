import { Component, ComponentProps } from "solid-js";

export const IconTargetArrow: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="1" />
    <path d="M12 7a5 5 0 1 0 5 5" />
    <path d="M13.004 3.055A9 9 0 1 0 20.945 11" />
    <path d="M15 6v3h3l3-3h-3V3zM15 9l-3 3" />
  </svg>
);
