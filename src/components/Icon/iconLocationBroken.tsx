import { Component, ComponentProps } from "solid-js";

export const IconLocationBroken: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m13 20-3-6-7-3.5a.55.55 0 0 1 0-1L21 3c-1.698 4.703-3.05 8.37-4 11M16 17l4 4m0-4-4 4" />
  </svg>
);
