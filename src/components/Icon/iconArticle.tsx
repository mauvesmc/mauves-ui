import { Component, ComponentProps } from "solid-js";

export const IconArticle: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="18" height="16" x="3" y="4" rx="2" />
    <path d="M7 8h10M7 12h10M7 16h10" />
  </svg>
);
