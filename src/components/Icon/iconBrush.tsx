import { Component, ComponentProps } from "solid-js";

export const IconBrush: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 21v-4a4 4 0 1 1 4 4H3" />
    <path d="M21 3A16 16 0 0 0 8.2 13.2M21 3a16 16 0 0 1-10.2 12.8" />
    <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
  </svg>
);
