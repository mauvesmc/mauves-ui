import { Component, ComponentProps } from "solid-js";

export const IconBrandGoogleAnalytics: Component<ComponentProps<"svg">> = (
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
    <rect width="4" height="12" x="10" y="9" rx="1.105" />
    <rect width="4" height="18" x="17" y="3" rx="1.105" />
    <circle cx="5" cy="19" r="2" />
  </svg>
);
