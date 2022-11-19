import { Component, ComponentProps } from "solid-js";

export const IconConeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18.305 18.305C17.173 19.308 14.775 20 12 20c-3.866 0-7-1.343-7-3s3.134-3 7-3c.747 0 1.467.05 2.142.143" />
    <path d="M17.07 13.054 12 4l-1.432 2.558M9.129 9.127 5 16.5v.5M3 3l18 18" />
  </svg>
);
