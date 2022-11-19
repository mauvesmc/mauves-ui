import { Component, ComponentProps } from "solid-js";

export const IconArrowSharpTurnRight: Component<ComponentProps<"svg">> = (
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
    <path d="M7 18V6.69a.7.7 0 0 1 1.195-.495L18 16" />
    <path d="M13 16h5v-5" />
  </svg>
);
