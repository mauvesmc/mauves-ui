import { Component, ComponentProps } from "solid-js";

export const IconBlade: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m17.707 3.707 2.586 2.586a1 1 0 0 1 0 1.414l-.586.586a1 1 0 0 0 0 1.414l.586.586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1-1.414 0l-.586-.586a1 1 0 0 0-1.414 0l-.586.586a1 1 0 0 1-1.414 0l-2.586-2.586a1 1 0 0 1 0-1.414l.586-.586a1 1 0 0 0 0-1.414l-.586-.586a1 1 0 0 1 0-1.414l8.586-8.586a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 0 1.414 0l.586-.586a1 1 0 0 1 1.414 0zM8 16l3.2-3.2M12.8 11.2 16 8M14 8l2 2M8 14l2 2" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);
