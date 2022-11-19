import { Component, ComponentProps } from "solid-js";

export const IconPlaylist: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="14" cy="17" r="3" />
    <path d="M17 17V4h4M13 5H3M3 9h10M9 13H3" />
  </svg>
);
