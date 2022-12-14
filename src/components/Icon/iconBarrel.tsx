import { Component, ComponentProps } from "solid-js";

export const IconBarrel: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22C19.521 7.48 20 9.74 20 12c0 2.26-.479 4.52-1.437 6.78A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22C4.479 16.52 4 14.26 4 12c0-2.26.479-4.52 1.437-6.78A2 2 0 0 1 7.278 4z" />
    <path d="M14 4c.667 2.667 1 5.333 1 8s-.333 5.333-1 8M10 4c-.667 2.667-1 5.333-1 8s.333 5.333 1 8M4.5 16h15M19.5 8h-15" />
  </svg>
);
