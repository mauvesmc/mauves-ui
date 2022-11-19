import { Component, ComponentProps } from "solid-js";

export const IconBuildingMonument: Component<ComponentProps<"svg">> = (
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
    <path d="m8 18 2-13 2-2 2 2 2 13M5 21v-3h14v3M3 21h18" />
  </svg>
);
