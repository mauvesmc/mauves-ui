import { Component, ComponentProps } from "solid-js";

export const IconHanger: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14.004 6a2 2 0 1 0-4 0c.003 1.667.67 3 2.004 4H12l7.971 4.428A2 2 0 0 1 21 16.177V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-.823a2 2 0 0 1 1.029-1.749L12 10" />
  </svg>
);
