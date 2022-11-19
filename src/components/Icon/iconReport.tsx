import { Component, ComponentProps } from "solid-js";

export const IconReport: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.697M18 14v4h4M18 11V7a2 2 0 0 0-2-2h-2" />
    <rect width="6" height="4" x="8" y="3" rx="2" />
    <circle cx="18" cy="18" r="4" />
    <path d="M8 11h4M8 15h3" />
  </svg>
);
