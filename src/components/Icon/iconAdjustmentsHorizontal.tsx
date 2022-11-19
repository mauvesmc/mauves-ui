import { Component, ComponentProps } from "solid-js";

export const IconAdjustmentsHorizontal: Component<ComponentProps<"svg">> = (
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
    <circle cx="14" cy="6" r="2" />
    <path d="M4 6h8M16 6h4" />
    <circle cx="8" cy="12" r="2" />
    <path d="M4 12h2M10 12h10" />
    <circle cx="17" cy="18" r="2" />
    <path d="M4 18h11M19 18h1" />
  </svg>
);
