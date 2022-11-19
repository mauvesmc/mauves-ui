import { Component, ComponentProps } from "solid-js";

export const IconMoodTongueWink: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
    <circle cx="12" cy="12" r="9" />
    <path d="M9 10h.01M10 14v2a2 2 0 0 0 4 0v-2M15.5 14h-7M17 10c-.5-1-2.5-1-3 0" />
  </svg>
);
