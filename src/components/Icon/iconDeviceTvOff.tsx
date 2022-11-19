import { Component, ComponentProps } from "solid-js";

export const IconDeviceTvOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 7h8a2 2 0 0 1 2 2v8m-1.178 2.824c-.25.113-.529.176-.822.176H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2M16 3l-4 4-4-4M3 3l18 18" />
  </svg>
);
