import { Component, ComponentProps } from "solid-js";

export const IconMagnetOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 3a2 2 0 0 1 2 2m0 4v4a3 3 0 0 0 5.552 1.578M15 11V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v8a7.99 7.99 0 0 1-.424 2.577m-1.463 2.584A8 8 0 0 1 4 13V4.999c0-.297.065-.58.181-.833M4 8h4M15 8h4M3 3l18 18" />
  </svg>
);
