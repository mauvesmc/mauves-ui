import { Component, ComponentProps } from "solid-js";

export const IconDeviceNintendo: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h3zM14 20V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-3z" />
    <circle cx="17.5" cy="15.5" r="1" fill="currentColor" />
    <circle cx="6.5" cy="8.5" r="1" fill="currentColor" />
  </svg>
);
