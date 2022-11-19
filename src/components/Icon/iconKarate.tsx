import { Component, ComponentProps } from "solid-js";

export const IconKarate: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="18" cy="4" r="1" />
    <path d="m3 9 4.5 1 3 2.5M13 21v-8l3-5.5" />
    <path d="m8 4.5 4 2 4 1 4 3.5-2 3.5" />
  </svg>
);
