import { Component, ComponentProps } from "solid-js";

export const IconMickey: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5.5 3a3.5 3.5 0 0 1 3.25 4.8 7.017 7.017 0 0 0-2.424 2.1A3.5 3.5 0 1 1 5.5 3zM18.5 3a3.5 3.5 0 1 1-.826 6.902 7.013 7.013 0 0 0-2.424-2.103A3.5 3.5 0 0 1 18.5 3z" />
    <circle cx="12" cy="14" r="7" />
  </svg>
);
