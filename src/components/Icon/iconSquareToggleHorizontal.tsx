import { Component, ComponentProps } from "solid-js";

export const IconSquareToggleHorizontal: Component<ComponentProps<"svg">> = (
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
    <path d="M22 12H2M4 14V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8M18 20a2 2 0 0 0 2-2M4 18a2 2 0 0 0 2 2M14 20h-4" />
  </svg>
);
