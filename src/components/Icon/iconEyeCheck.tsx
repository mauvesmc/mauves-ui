import { Component, ComponentProps } from "solid-js";

export const IconEyeCheck: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="2" />
    <path d="M12 19c-4 0-7.333-2.333-10-7 2.667-4.667 6-7 10-7s7.333 2.333 10 7c-.42.736-.858 1.414-1.311 2.033M15 19l2 2 4-4" />
  </svg>
);
