import { Component, ComponentProps } from "solid-js";

export const IconMapPinOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M9.44 9.435a3 3 0 0 0 4.126 4.124M15 11a3 3 0 0 0-3-3" />
    <path d="M8.048 4.042A8 8 0 0 1 18.96 14.95m-1.8 2.206L13.415 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 0 1-.48-10.79" />
  </svg>
);
