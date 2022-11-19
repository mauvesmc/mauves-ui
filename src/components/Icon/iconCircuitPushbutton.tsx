import { Component, ComponentProps } from "solid-js";

export const IconCircuitPushbutton: Component<ComponentProps<"svg">> = (
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
    <path d="M2 17h2M20 17h2" />
    <circle cx="6" cy="17" r="2" />
    <circle cx="18" cy="17" r="2" />
    <path d="M6 11h12M12 11V5" />
  </svg>
);
