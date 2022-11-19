import { Component, ComponentProps } from "solid-js";

export const IconArrowsSplit: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M21 17h-8l-3.5-5H3M21 7h-8l-3.495 5" />
    <path d="m18 10 3-3-3-3M18 20l3-3-3-3" />
  </svg>
);
