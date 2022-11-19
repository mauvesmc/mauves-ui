import { Component, ComponentProps } from "solid-js";

export const IconWall: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <path d="M4 8h16M20 12H4M4 16h16M9 4v4M14 8v4M8 12v4M16 12v4M11 16v4" />
  </svg>
);
