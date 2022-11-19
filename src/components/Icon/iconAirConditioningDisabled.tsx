import { Component, ComponentProps } from "solid-js";

export const IconAirConditioningDisabled: Component<ComponentProps<"svg">> = (
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
    <rect width="18" height="8" x="3" y="8" rx="2" />
    <path d="M7 16v-3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
  </svg>
);
