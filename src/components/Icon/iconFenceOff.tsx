import { Component, ComponentProps } from "solid-js";

export const IconFenceOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 12H4v4h12m4 0v-4h-4M6 16v4h4v-4M10 12v-2m0-4L8 4M6 6v6M14 16v4h4v-2M18 12V6l-2-2-2 2v4M3 3l18 18" />
  </svg>
);
