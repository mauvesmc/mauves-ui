import { Component, ComponentProps } from "solid-js";

export const IconBadgeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 7v10l5 3 5-3m0-4V4l-5 3-2.496-1.497M3 3l18 18" />
  </svg>
);
