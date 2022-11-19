import { Component, ComponentProps } from "solid-js";

export const IconWebhookOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4.876 13.61A4 4 0 1 0 11 17h6M15.066 20.502a4 4 0 0 0 4.763-.675M21 17a4 4 0 0 0-4-4" />
    <path d="M16 8a4 4 0 0 0-6.824-2.833M8 8c0 1.506.77 2.818 2 3.5L7 17M3 3l18 18" />
  </svg>
);
