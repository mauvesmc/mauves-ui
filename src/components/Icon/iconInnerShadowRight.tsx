import { Component, ComponentProps } from "solid-js";

export const IconInnerShadowRight: Component<ComponentProps<"svg">> = (
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
    <path d="M18.364 18.364A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728z" />
    <path d="M16.243 7.757a6 6 0 0 1 0 8.486" />
  </svg>
);
