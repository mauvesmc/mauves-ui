import { Component, ComponentProps } from "solid-js";

export const IconBuildingTunnel: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 21h14a2 2 0 0 0 2-2v-7a9 9 0 0 0-18 0v7a2 2 0 0 0 2 2z" />
    <path d="M8 21v-9a4 4 0 1 1 8 0v9M3 17h4M17 17h4M21 12h-4M7 12H3M12 3v5M6 6l3 3M15 9l3-3-3 3z" />
  </svg>
);
