import { Component, ComponentProps } from "solid-js";

export const IconServerCog: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="18" height="8" x="3" y="4" rx="3" />
    <path d="M12 20H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h10.5" />
    <circle cx="18.001" cy="18" r="2" />
    <path d="M18.001 14.5V16M18.001 20v1.5M21.032 16.25l-1.299.75M16.27 19l-1.3.75M14.97 16.25l1.3.75M19.733 19l1.3.75M7 8v.01M7 16v.01" />
  </svg>
);
