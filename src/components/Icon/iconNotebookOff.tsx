import { Component, ComponentProps } from "solid-js";

export const IconNotebookOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 4h9a2 2 0 0 1 2 2v9m-.179 3.828A2 2 0 0 1 17 20H6a1 1 0 0 1-1-1V5m4-1v1m0 4v13M13 8h2M3 3l18 18" />
  </svg>
);
