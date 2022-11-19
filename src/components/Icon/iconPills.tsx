import { Component, ComponentProps } from "solid-js";

export const IconPills: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="8" cy="8" r="5" />
    <circle cx="17" cy="17" r="4" />
    <path d="m4.5 4.5 7 7M19.5 14.5l-5 5" />
  </svg>
);
