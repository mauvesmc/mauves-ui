import { Component, ComponentProps } from "solid-js";

export const IconBrandMastercard: Component<ComponentProps<"svg">> = (
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
    <circle cx="14" cy="12" r="3" />
    <path d="M12 9.765a3 3 0 1 0 0 4.47" />
    <rect width="18" height="14" x="3" y="5" rx="2" />
  </svg>
);
