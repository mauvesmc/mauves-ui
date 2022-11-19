import { Component, ComponentProps } from "solid-js";

export const IconMoodSadSquint: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M14.5 16.05a3.5 3.5 0 0 0-5 0M8.5 11.5 10 10 8.5 8.5M15.5 11.5 14 10l1.5-1.5" />
  </svg>
);
