import { Component, ComponentProps } from "solid-js";

export const IconAccessible: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="m10 16.5 2-3 2 3m-2-3v-2l3-1m-6 0 3 1" />
    <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
  </svg>
);
