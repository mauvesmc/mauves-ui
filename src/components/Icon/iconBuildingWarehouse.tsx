import { Component, ComponentProps } from "solid-js";

export const IconBuildingWarehouse: Component<ComponentProps<"svg">> = (
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
    <path d="M3 21V8l9-4 9 4v13" />
    <path d="M13 13h4v8H7v-6h6" />
    <path d="M13 21v-9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
  </svg>
);
