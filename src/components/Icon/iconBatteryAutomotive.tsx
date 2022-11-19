import { Component, ComponentProps } from "solid-js";

export const IconBatteryAutomotive: Component<ComponentProps<"svg">> = (
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
    <rect width="18" height="14" x="3" y="6" rx="2" />
    <path d="M6 6V4M19 4v2M6.5 13h3M14.5 13h3M16 11.5v3" />
  </svg>
);
