import { Component, ComponentProps } from "solid-js";

export const IconBookmarks: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13 7a2 2 0 0 1 2 2v12l-5-3-5 3V9a2 2 0 0 1 2-2h6z" />
    <path d="M9.265 4A2 2 0 0 1 11 3h6a2 2 0 0 1 2 2v12l-1-.6" />
  </svg>
);
