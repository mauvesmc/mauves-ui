import { Component, ComponentProps } from "solid-js";

export const IconBuildingEstate: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 21h18M19 21v-4M19 17a2 2 0 0 0 2-2v-2a2 2 0 1 0-4 0v2a2 2 0 0 0 2 2zM14 21V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v14M9 17v4M8 13h2M8 9h2" />
  </svg>
);
