import { Component, ComponentProps } from "solid-js";

export const IconMoodSad2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14.5 16.05a3.5 3.5 0 0 0-5 0M10 9.25c-.5 1-2.5 1-3 0M17 9.25c-.5 1-2.5 1-3 0" />
  </svg>
);
