import { Component, ComponentProps } from "solid-js";

export const IconHeadphones: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="5" height="7" x="4" y="13" rx="2" />
    <rect width="5" height="7" x="15" y="13" rx="2" />
    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
  </svg>
);
