import { Component, ComponentProps } from "solid-js";

export const IconReload: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19.933 13.041a8 8 0 1 1-9.925-8.788C13.907 3.251 17.943 5.26 19.433 9" />
    <path d="M20 4v5h-5" />
  </svg>
);
