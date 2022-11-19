import { Component, ComponentProps } from "solid-js";

export const IconSunLow: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="4" />
    <path d="M4 12h.01M12 4v.01M20 12h.01M12 20v.01M6.31 6.31 6.3 6.3M17.71 6.31l-.01-.01M17.7 17.7l.01.01M6.3 17.7l.01.01" />
  </svg>
);
