import { Component, ComponentProps } from "solid-js";

export const IconPennantOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 21h4M10 21V10m0-4V3M10 4l9 4-4.858 2.16m-2.764 1.227L10 12M3 3l18 18" />
  </svg>
);
