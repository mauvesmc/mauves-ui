import { Component, ComponentProps } from "solid-js";

export const IconMoped: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="18" cy="17" r="2" />
    <path d="M5 16v1a2 2 0 0 0 4 0v-5H6a3 3 0 0 0-3 3v1h10a6 6 0 0 1 5-4V7a2 2 0 0 0-2-2h-1M6 9h3" />
  </svg>
);
