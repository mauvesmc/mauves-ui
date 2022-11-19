import { Component, ComponentProps } from "solid-js";

export const IconEaseInOutControlPoints: Component<ComponentProps<"svg">> = (
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
    <path d="M17 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0zM17 20h-2M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 4h2M14 4h-2M12 20h-2M3 20c8 0 10-16 18-16" />
  </svg>
);
