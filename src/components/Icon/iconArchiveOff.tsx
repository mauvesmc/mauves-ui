import { Component, ComponentProps } from "solid-js";

export const IconArchiveOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 4h11a2 2 0 1 1 0 4h-7M8 8H5a2 2 0 0 1-.826-3.822" />
    <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 1.824-1.18M19 15V8M10 12h2M3 3l18 18" />
  </svg>
);
