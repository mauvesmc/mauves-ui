import { Component, ComponentProps } from "solid-js";

export const IconMoodXd: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
    <path d="M9 14h6a3 3 0 1 1-6 0zM9 8l6 3M9 11l6-3" />
  </svg>
);