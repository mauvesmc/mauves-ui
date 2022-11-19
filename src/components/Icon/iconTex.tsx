import { Component, ComponentProps } from "solid-js";

export const IconTex: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 8V7H3v1M6 15V7M21 15l-5-8M16 15l5-8M14 11h-4v8h4M10 15h3" />
  </svg>
);
