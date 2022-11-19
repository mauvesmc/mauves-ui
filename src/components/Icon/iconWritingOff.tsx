import { Component, ComponentProps } from "solid-js";

export const IconWritingOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 7h4M16 16v1l2 2 .5-.5M20 16V5c0-1.121-.879-2-2-2s-2 .879-2 2v7M18 19H5a2 2 0 1 1 0-4h4a2 2 0 1 0 0-4H6M3 3l18 18" />
  </svg>
);
