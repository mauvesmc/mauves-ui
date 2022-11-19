import { Component, ComponentProps } from "solid-js";

export const IconTractor: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="7" cy="15" r="4" />
    <path d="M7 15v.01" />
    <circle cx="19" cy="17" r="2" />
    <path d="M10.5 17H17M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5" />
    <path d="M18 5h-1a1 1 0 0 0-1 1v4" />
  </svg>
);
