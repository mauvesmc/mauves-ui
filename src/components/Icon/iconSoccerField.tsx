import { Component, ComponentProps } from "solid-js";

export const IconSoccerField: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="3" />
    <path d="M3 9h3v6H3zM18 9h3v6h-3z" />
    <rect width="18" height="14" x="3" y="5" rx="2" />
    <path d="M12 5v14" />
  </svg>
);
