import { Component, ComponentProps } from "solid-js";

export const IconBuildingFortress: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M7 21h1a1 1 0 0 0 1-1v-1h0a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1-1V5l-3-2-3 2v6h-4V5L7 3 4 5v15a1 1 0 0 0 1 1h2m8-2v1a1 1 0 0 0 1 1h2M7 7h0v.01M7 10h0v.01M7 13h0v.01M17 7h0v.01M17 10h0v.01M17 13h0v.01" />
  </svg>
);
