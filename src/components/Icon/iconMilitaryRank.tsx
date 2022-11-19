import { Component, ComponentProps } from "solid-js";

export const IconMilitaryRank: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 7v13H7V7l5-3z" />
    <path d="m10 13 2-1 2 1M10 17l2-1 2 1M10 9l2-1 2 1" />
  </svg>
);
