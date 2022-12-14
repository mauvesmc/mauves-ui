import { Component, ComponentProps } from "solid-js";

export const IconBuildingBroadcastTower: Component<ComponentProps<"svg">> = (
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
    <circle cx="12" cy="12" r="1" />
    <path d="M16.616 13.924a5 5 0 1 0-9.23.004" />
    <path d="M20.307 15.469a9 9 0 1 0-16.615 0" />
    <path d="m9 21 3-9 3 9M10 19h4" />
  </svg>
);
