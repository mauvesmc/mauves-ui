import { Component, ComponentProps } from "solid-js";

export const IconStethoscopeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4.172 4.179A2 2 0 0 0 3 6v3.5a5.5 5.5 0 0 0 9.856 3.358M14 10V6a2 2 0 0 0-2-2h-1" />
    <path d="M8 15a6 6 0 0 0 10.714 3.712m1.216-2.798c.046-.3.07-.605.07-.914v-3M11 3v2" />
    <circle cx="20" cy="10" r="2" />
    <path d="m3 3 18 18" />
  </svg>
);
