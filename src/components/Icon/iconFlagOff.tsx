import { Component, ComponentProps } from "solid-js";

export const IconFlagOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 5v16M19 5v9M7.641 3.645A4.994 4.994 0 0 1 12 5a5 5 0 0 0 7 0M5 14a5 5 0 0 1 7 0 4.984 4.984 0 0 0 3.437 1.429m3.019-.966c.19-.14.371-.294.544-.463M3 3l18 18" />
  </svg>
);
