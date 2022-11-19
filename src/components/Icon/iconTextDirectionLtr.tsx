import { Component, ComponentProps } from "solid-js";

export const IconTextDirectionLtr: Component<ComponentProps<"svg">> = (
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
    <path d="M5 19h14M17 21l2-2-2-2M16 4H9.5a3.5 3.5 0 0 0 0 7h.5M14 15V4M10 15V4" />
  </svg>
);
