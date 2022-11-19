import { Component, ComponentProps } from "solid-js";

export const IconCarCrane: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="17" cy="17" r="2" />
    <path d="M7 18h8m4 0h2v-6a5 5 0 0 0-5-5h-1l1.5 5H21M12 18V7h3M3 17v-5h9" />
    <path d="M4 12V6l18-3v2" />
    <path d="M8 12V8L4 6" />
  </svg>
);
