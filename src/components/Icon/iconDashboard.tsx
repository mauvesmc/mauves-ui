import { Component, ComponentProps } from "solid-js";

export const IconDashboard: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="13" r="2" />
    <path d="M13.45 11.55 15.5 9.5M6.4 20a9 9 0 1 1 11.2 0z" />
  </svg>
);
