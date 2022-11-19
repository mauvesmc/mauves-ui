import { Component, ComponentProps } from "solid-js";

export const IconSpy: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 11h18M5 11V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" />
    <circle cx="7" cy="17" r="3" />
    <circle cx="17" cy="17" r="3" />
    <path d="M10 17h4" />
  </svg>
);
