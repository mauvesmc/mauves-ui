import { Component, ComponentProps } from "solid-js";

export const IconLayoutOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 4a2 2 0 0 1 2 2M8.838 8.816A1.993 1.993 0 0 1 8 9H6a2 2 0 0 1-2-2V6c0-.549.221-1.046.58-1.407" />
    <rect width="6" height="7" x="4" y="13" rx="2" />
    <path d="M14 10V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-.595 3.423A1.994 1.994 0 0 1 18 20h-2a2 2 0 0 1-2-2v-4M3 3l18 18" />
  </svg>
);
