import { Component, ComponentProps } from "solid-js";

export const IconBoxAlignTopLeft: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M11.005 5.005v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1zM15.005 4.005h-.01M20.005 4.005h-.01M20.005 9.005h-.01M20.005 15.005h-.01M4.005 15.005h-.01M20.005 20.005h-.01M15.005 20.005h-.01M9.005 20.005h-.01M4.005 20.005h-.01" />
  </svg>
);
