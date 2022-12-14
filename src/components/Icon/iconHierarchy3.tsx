import { Component, ComponentProps } from "solid-js";

export const IconHierarchy3: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="5" r="2" />
    <circle cx="8" cy="12" r="2" />
    <circle cx="12" cy="19" r="2" />
    <circle cx="20" cy="19" r="2" />
    <circle cx="4" cy="19" r="2" />
    <circle cx="16" cy="12" r="2" />
    <path d="m5 17 2-3M9 10l2-3M13 7l2 3M17 14l2 3M15 14l-2 3M9 14l2 3" />
  </svg>
);
