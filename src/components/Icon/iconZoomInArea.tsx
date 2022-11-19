import { Component, ComponentProps } from "solid-js";

export const IconZoomInArea: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15 13v4M13 15h4" />
    <circle cx="15" cy="15" r="5" />
    <path d="m22 22-3-3M6 18H5a2 2 0 0 1-2-2v-1M3 11v-1M3 6V5a2 2 0 0 1 2-2h1M10 3h1M15 3h1a2 2 0 0 1 2 2v1" />
  </svg>
);
