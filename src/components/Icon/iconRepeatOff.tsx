import { Component, ComponentProps } from "solid-js";

export const IconRepeatOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 12V9a3 3 0 0 1 2.08-2.856M10 6h10m-3-3 3 3-3 3M20 12v3a3 3 0 0 1-.133.886m-1.99 1.984A3 3 0 0 1 17 18H4m3 3-3-3 3-3M3 3l18 18" />
  </svg>
);
