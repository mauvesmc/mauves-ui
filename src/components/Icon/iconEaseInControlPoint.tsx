import { Component, ComponentProps } from "solid-js";

export const IconEaseInControlPoint: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M3 19c8 0 18-16 18-16M17 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM17 19h-2M12 19h-2" />
  </svg>
);
