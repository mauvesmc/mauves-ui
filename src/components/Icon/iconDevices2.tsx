import { Component, ComponentProps } from "solid-js";

export const IconDevices2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6" />
    <rect width="8" height="16" x="13" y="4" rx="1" />
    <path d="M7 19h3M17 8v.01" />
    <circle cx="17" cy="16" r="1" />
    <path d="M9 15v4" />
  </svg>
);
