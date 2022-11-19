import { Component, ComponentProps } from "solid-js";

export const IconGitCherryPick: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="7" cy="12" r="3" />
    <path d="M7 3v6M7 15v6M13 7h2.5l1.5 5-1.5 5H13M17 12h3" />
  </svg>
);
