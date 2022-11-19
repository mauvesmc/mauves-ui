import { Component, ComponentProps } from "solid-js";

export const IconTemperaturePlus: Component<ComponentProps<"svg">> = (
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
    <path d="M8 13.5a4 4 0 1 0 4 0V5a2 2 0 0 0-4 0v8.5M8 9h4M16 9h6M19 6v6" />
  </svg>
);
