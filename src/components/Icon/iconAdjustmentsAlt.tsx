import { Component, ComponentProps } from "solid-js";

export const IconAdjustmentsAlt: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 8h4v4H4zM6 4v4M6 12v8M10 14h4v4h-4zM12 4v10M12 18v2M16 5h4v4h-4zM18 4v1M18 9v11" />
  </svg>
);
