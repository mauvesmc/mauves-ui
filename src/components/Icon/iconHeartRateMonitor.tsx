import { Component, ComponentProps } from "solid-js";

export const IconHeartRateMonitor: Component<ComponentProps<"svg">> = (
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
    <rect width="18" height="12" x="3" y="4" rx="1" />
    <path d="M7 20h10M9 16v4M15 16v4M7 10h2l2 3 2-6 1 3h3" />
  </svg>
);
