import { Component, ComponentProps } from "solid-js";

export const IconArrowLoopLeft: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13 21V8a4 4 0 1 1 4 4H4" />
    <path d="m8 16-4-4 4-4" />
  </svg>
);
