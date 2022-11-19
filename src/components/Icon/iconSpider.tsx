import { Component, ComponentProps } from "solid-js";

export const IconSpider: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 4v2l5 5M2.5 9.5 4 11h6M4 19v-2l6-6M19 4v2l-5 5M21.5 9.5 20 11h-6M20 19v-2l-6-6" />
    <circle cx="12" cy="15" r="4" />
    <circle cx="12" cy="9" r="2" />
  </svg>
);
