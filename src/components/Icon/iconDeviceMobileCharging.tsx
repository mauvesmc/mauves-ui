import { Component, ComponentProps } from "solid-js";

export const IconDeviceMobileCharging: Component<ComponentProps<"svg">> = (
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
    <rect width="12" height="18" x="6" y="3" rx="2" />
    <path d="M11 4h2M12 9.5 11 12h2l-1 2.5" />
  </svg>
);
