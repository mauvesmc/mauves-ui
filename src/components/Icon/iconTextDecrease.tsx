import { Component, ComponentProps } from "solid-js";

export const IconTextDecrease: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 19V8.5a3.5 3.5 0 1 1 7 0V19M4 13h7M21 12h-6" />
  </svg>
);
