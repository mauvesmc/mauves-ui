import { Component, ComponentProps } from "solid-js";

export const IconMailFast: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 7h3M3 11h2M9.02 8.801l-.6 6A2 2 0 0 0 10.41 17h7.98a2 2 0 0 0 1.99-1.801l.6-6A2 2 0 0 0 18.99 7h-7.98a2 2 0 0 0-1.99 1.801z" />
    <path d="m9.8 7.5 2.982 3.28a3 3 0 0 0 4.238.202L20.3 8" />
  </svg>
);
