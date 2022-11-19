import { Component, ComponentProps } from "solid-js";

export const IconFolderOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M19 19H5a2 2 0 0 1-2-2V6a2 2 0 0 1 1.172-1.821M8 4h1l3 3h7a2 2 0 0 1 2 2v8" />
  </svg>
);
