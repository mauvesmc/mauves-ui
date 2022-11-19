import { Component, ComponentProps } from "solid-js";

export const IconVectorTriangleOff: Component<ComponentProps<"svg">> = (
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
    <path d="M10 6V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1" />
    <rect width="4" height="4" x="3" y="17" rx="1" />
    <path d="M20.705 20.709A.997.997 0 0 1 20 21h-2a1 1 0 0 1-1-1v-2c0-.28.115-.532.3-.714M6.5 17.1l3.749-6.823M13.158 9.197 12.5 8M7 19h10M3 3l18 18" />
  </svg>
);
