import { Component, ComponentProps } from "solid-js";

export const IconGhostOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.794 4.776A7 7 0 0 1 19 11v4m-.12 3.898a1.779 1.779 0 0 1-2.98.502 1.65 1.65 0 0 0-2.6 0 1.65 1.65 0 0 1-2.6 0 1.65 1.65 0 0 0-2.6 0A1.78 1.78 0 0 1 5 18v-7c0-1.683.594-3.227 1.583-4.434M14 10h.01" />
    <path d="M10 14a3.5 3.5 0 0 0 4 0M3 3l18 18" />
  </svg>
);
