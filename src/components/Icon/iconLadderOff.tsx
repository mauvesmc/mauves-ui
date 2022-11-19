import { Component, ComponentProps } from "solid-js";

export const IconLadderOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 3v1m0 4v13M16 3v9m0 4v5M8 14h6M8 10h2m4 0h2M10 6h6M8 18h8M3 3l18 18" />
  </svg>
);
