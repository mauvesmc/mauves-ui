import { Component, ComponentProps } from "solid-js";

export const IconSquaresFilled: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="12" height="12" x="8" y="8" rx="2" />
    <path d="m8 14.5 6.492-6.492M13.496 20.004 20 13.5l-6.504 6.504zM8.586 19.414 19.413 8.587M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
  </svg>
);
