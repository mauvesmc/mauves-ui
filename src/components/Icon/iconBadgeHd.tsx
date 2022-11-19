import { Component, ComponentProps } from "solid-js";

export const IconBadgeHd: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="18" height="14" x="3" y="5" rx="2" />
    <path d="M14 9v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1zM7 15V9M10 15V9M7 12h3" />
  </svg>
);
