import { Component, ComponentProps } from "solid-js";

export const IconBarrierBlockOff: Component<ComponentProps<"svg">> = (
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
    <path d="M11 7h8a1 1 0 0 1 1 1v7c0 .27-.107.516-.282.696M16 16H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2M7 16v4M7.5 16l4.244-4.244M13.745 9.755 16.5 7M13.5 16l1.249-1.249M16.741 12.759 20 9.5M4 13.5l4.752-4.752M17 17v3M5 20h4M15 20h4M17 7V5M3 3l18 18" />
  </svg>
);
