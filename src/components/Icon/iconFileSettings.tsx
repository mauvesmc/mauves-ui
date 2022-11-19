import { Component, ComponentProps } from "solid-js";

export const IconFileSettings: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="14" r="2" />
    <path d="M12 10.5V12M12 16v1.5M15.031 12.25l-1.299.75M10.268 15l-1.3.75M15 15.803l-1.285-.773M10.285 12.97 9 12.197M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
  </svg>
);
