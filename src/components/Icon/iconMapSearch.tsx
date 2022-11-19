import { Component, ComponentProps } from "solid-js";

export const IconMapSearch: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m11 18-2-1-6 3V7l6-3 6 3 6-3v10M9 4v13M15 7v5" />
    <circle cx="16.5" cy="17.5" r="2.5" />
    <path d="M18.5 19.5 21 22" />
  </svg>
);
