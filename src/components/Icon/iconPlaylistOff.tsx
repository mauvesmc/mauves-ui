import { Component, ComponentProps } from "solid-js";

export const IconPlaylistOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14 14a3 3 0 1 0 3 3M17 13V4h4M13 5H9M5 5H3M3 9h6M9 13H3M3 3l18 18" />
  </svg>
);
