import { Component, ComponentProps } from "solid-js";

export const IconBuildingFactory2: Component<ComponentProps<"svg">> = (
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
    <path d="M3 21h18M5 21V9l5 4V9l5 4h4" />
    <path d="M19 21v-8l-1.436-9.574A.5.5 0 0 0 17.069 3h-1.145a.5.5 0 0 0-.494.418L14 12M9 17h1M14 17h1" />
  </svg>
);
