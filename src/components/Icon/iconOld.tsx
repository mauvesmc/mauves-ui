import { Component, ComponentProps } from "solid-js";

export const IconOld: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m11 21-1-4-2-3V8" />
    <path d="m5 14-1-3 4-3 3 2 3 .5" />
    <circle cx="8" cy="4" r="1" />
    <path d="m7 17-2 4M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
  </svg>
);
