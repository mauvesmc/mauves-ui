import { Component, ComponentProps } from "solid-js";

export const IconArrowsShuffle: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m18 4 3 3-3 3M18 20l3-3-3-3" />
    <path d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5M21 7h-5a4.978 4.978 0 0 0-2.998.998M9 16.001A4.984 4.984 0 0 1 6 17H3" />
  </svg>
);
