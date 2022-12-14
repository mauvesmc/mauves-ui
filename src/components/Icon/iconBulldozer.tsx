import { Component, ComponentProps } from "solid-js";

export const IconBulldozer: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="4" cy="17" r="2" />
    <circle cx="13" cy="17" r="2" />
    <path d="M18 13v6h3M13 19H4M4 15h9M8 12V7h2a3 3 0 0 1 3 3v5" />
    <path d="M5 15v-2a1 1 0 0 1 1-1h7M18 17h-3" />
  </svg>
);
