import { Component, ComponentProps } from "solid-js";

export const IconHelmet: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 4a9 9 0 0 1 5.656 16H6.344A9 9 0 0 1 12 4z" />
    <path d="M20 9h-8.8a1 1 0 0 0-.968 1.246c.507 2 1.596 3.418 3.268 4.254 2 1 4.333 1.5 7 1.5" />
  </svg>
);
