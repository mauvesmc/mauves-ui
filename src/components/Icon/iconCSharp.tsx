import { Component, ComponentProps } from "solid-js";

export const IconCSharp: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 9a3 3 0 0 0-3-3h-.5A3.5 3.5 0 0 0 3 9.5v5A3.5 3.5 0 0 0 6.5 18H7a3 3 0 0 0 3-3M16 7l-1 10M20 7l-1 10M14 10h7.5M21 14h-7.5" />
  </svg>
);
