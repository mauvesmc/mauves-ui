import { Component, ComponentProps } from "solid-js";

export const IconExchange: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="5" cy="18" r="2" />
    <circle cx="19" cy="6" r="2" />
    <path d="M19 8v5a5 5 0 0 1-5 5h-3l3-3m0 6-3-3M5 16v-5a5 5 0 0 1 5-5h3l-3-3m0 6 3-3" />
  </svg>
);
