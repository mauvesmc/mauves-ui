import { Component, ComponentProps } from "solid-js";

export const IconAdjustments: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="6" cy="10" r="2" />
    <path d="M6 4v4M6 12v8" />
    <circle cx="12" cy="16" r="2" />
    <path d="M12 4v10M12 18v2" />
    <circle cx="18" cy="7" r="2" />
    <path d="M18 4v1M18 9v11" />
  </svg>
);
