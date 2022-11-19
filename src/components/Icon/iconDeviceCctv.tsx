import { Component, ComponentProps } from "solid-js";

export const IconDeviceCctv: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="18" height="4" x="3" y="3" rx="1" />
    <circle cx="12" cy="14" r="4" />
    <path d="M19 7v7a7 7 0 0 1-14 0V7M12 14h.01" />
  </svg>
);
