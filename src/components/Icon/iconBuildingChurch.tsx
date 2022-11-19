import { Component, ComponentProps } from "solid-js";

export const IconBuildingChurch: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 21h18M10 21v-4a2 2 0 0 1 4 0v4M10 5h4M12 3v5" />
    <path d="M6 21v-7m-2 2 8-8 8 8m-2-2v7" />
  </svg>
);
