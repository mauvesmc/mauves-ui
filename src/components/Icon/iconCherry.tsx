import { Component, ComponentProps } from "solid-js";

export const IconCherry: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="7.5" cy="16.5" r="3.5" />
    <circle cx="17" cy="18" r="3" />
    <path d="M9 13c.366-2.006 1.866-3.873 4.5-5.6M17 15c-1.333-2.333-2.333-5.333-1-9" />
    <path d="M5 6c3.667-2.667 7.333-2.667 11 0-3.667 2.667-7.333 2.667-11 0" />
  </svg>
);
