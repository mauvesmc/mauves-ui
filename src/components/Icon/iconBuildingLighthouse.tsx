import { Component, ComponentProps } from "solid-js";

export const IconBuildingLighthouse: Component<ComponentProps<"svg">> = (
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
    <path d="m12 3 2 3 2 15H8l2-15zM8 9h8M3 11l2-2-2-2M21 11l-2-2 2-2" />
  </svg>
);
