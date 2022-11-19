import { Component, ComponentProps } from "solid-js";

export const IconGenderTransgender: Component<ComponentProps<"svg">> = (
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
    <circle cx="12" cy="12" r="4" />
    <path d="m15 9 6-6M21 7V3h-4M9 9 3 3M3 7V3h4M5.5 8.5l3-3M12 16v5M9.5 19h5" />
  </svg>
);
