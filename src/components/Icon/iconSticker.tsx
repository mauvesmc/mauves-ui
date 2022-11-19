import { Component, ComponentProps } from "solid-js";

export const IconSticker: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m20 12-2 .5A6 6 0 0 1 11.5 6l.5-2 8 8" />
    <path d="M20 12a8 8 0 1 1-8-8" />
  </svg>
);
