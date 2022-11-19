import { Component, ComponentProps } from "solid-js";

export const IconTransitionBottom: Component<ComponentProps<"svg">> = (
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
    <path d="M21 18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3" />
    <rect width="18" height="6" x="3" y="3" rx="3" />
    <path d="M12 9v8M9 14l3 3 3-3" />
  </svg>
);
