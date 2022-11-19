import { Component, ComponentProps } from "solid-js";

export const IconHomeLink: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20.085 11.085 12 3l-9 9h2v7a2 2 0 0 0 2 2h4.5" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.807 1.143" />
    <circle cx="21" cy="21" r="1" />
    <circle cx="21" cy="16" r="1" />
    <circle cx="16" cy="19" r="1" />
    <path d="m21 16-5 3 5 2" />
  </svg>
);
