import { Component, ComponentProps } from "solid-js";

export const IconBinary: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11 10V5h-1m8 14v-5h-1" />
    <rect width="3" height="5" x="15" y="5" rx=".5" />
    <rect width="3" height="5" x="10" y="14" rx=".5" />
    <path d="M6 10h.01M6 19h.01" />
  </svg>
);
