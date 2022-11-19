import { Component, ComponentProps } from "solid-js";

export const IconForklift: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="5" cy="17" r="2" />
    <circle cx="14" cy="17" r="2" />
    <path d="M7 17h5M3 17v-6h13v6M5 11V7h4M9 11V5h4l3 6M22 15h-3V5M16 13h3" />
  </svg>
);
