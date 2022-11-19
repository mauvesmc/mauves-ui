import { Component, ComponentProps } from "solid-js";

export const IconDatabaseExport: Component<ComponentProps<"svg">> = (props) => (
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
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v6c0 1.657 3.582 3 8 3a19.84 19.84 0 0 0 3.302-.267M20 12V6" />
    <path d="M4 12v6c0 1.599 3.335 2.905 7.538 2.995M20 14v-2m-6 7h7m-3-3 3 3-3 3" />
  </svg>
);
