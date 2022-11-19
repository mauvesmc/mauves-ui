import { Component, ComponentProps } from "solid-js";

export const IconPodium: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 8h14l-.621 2.485A2 2 0 0 1 16.439 12H7.561a2 2 0 0 1-1.94-1.515L5 8zM7 8V6a3 3 0 0 1 3-3M8 12l1 9M16 12l-1 9M7 21h10" />
  </svg>
);
