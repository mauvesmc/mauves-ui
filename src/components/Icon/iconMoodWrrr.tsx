import { Component, ComponentProps } from "solid-js";

export const IconMoodWrrr: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m8 16 1-1 1.5 1 1.5-1 1.5 1 1.5-1 1 1M8.5 11.5 10 10 8.5 8.5M15.5 11.5 14 10l1.5-1.5" />
  </svg>
);
