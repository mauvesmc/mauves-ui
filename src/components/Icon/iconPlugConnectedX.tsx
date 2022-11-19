import { Component, ComponentProps } from "solid-js";

export const IconPlugConnectedX: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m20 16-4 4M7 12l5 5-1.5 1.5a3.536 3.536 0 1 1-5-5L7 12zM17 12l-5-5 1.5-1.5a3.536 3.536 0 1 1 5 5L17 12zM3 21l2.5-2.5M18.5 5.5 21 3M10 11l-2 2M13 14l-2 2M16 16l4 4" />
  </svg>
);
