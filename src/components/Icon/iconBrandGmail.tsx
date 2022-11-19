import { Component, ComponentProps } from "solid-js";

export const IconBrandGmail: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 20h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3v16zM5 20h3V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zM16 4l-4 4-4-4" />
    <path d="m4 6.5 8 7.5 8-7.5" />
  </svg>
);
