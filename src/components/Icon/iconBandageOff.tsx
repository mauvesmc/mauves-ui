import { Component, ComponentProps } from "solid-js";

export const IconBandageOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 12v.01M12 14v.01M10.513 6.487 12.5 4.5a4.95 4.95 0 0 1 7 7l-2.018 2.018M15.5 15.5l-4 4a4.95 4.95 0 0 1-7-7l4-4M3 3l18 18" />
  </svg>
);
