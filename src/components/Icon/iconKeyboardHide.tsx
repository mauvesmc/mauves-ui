import { Component, ComponentProps } from "solid-js";

export const IconKeyboardHide: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="20" height="12" x="2" y="3" rx="2" />
    <path d="M6 7h0M10 7h0M14 7h0M18 7h0M6 11v.01M18 11v.01M10 11h4M10 21l2-2 2 2" />
  </svg>
);
