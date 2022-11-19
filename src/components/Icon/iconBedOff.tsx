import { Component, ComponentProps } from "solid-js";

export const IconBedOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 7v11M3 14h11M18 14h3M21 18v-8a2 2 0 0 0-2-2h-7M11 11v3" />
    <circle cx="7" cy="10" r="1" />
    <path d="m3 3 18 18" />
  </svg>
);
