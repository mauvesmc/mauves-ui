import { Component, ComponentProps } from "solid-js";

export const IconDeviceNintendoOff: Component<ComponentProps<"svg">> = (
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
    <path d="M4.713 4.718A3.995 3.995 0 0 0 3 8v8a4 4 0 0 0 4 4h3V10m0-4V4H8M14 10V4h3a4 4 0 0 1 4 4v8c0 .308-.035.608-.1.896m-1.62 2.39A3.982 3.982 0 0 1 17 20h-3v-6" />
    <circle cx="6.5" cy="8.5" r="1" />
    <path d="m3 3 18 18" />
  </svg>
);
