import { Component, ComponentProps } from "solid-js";

export const IconMatchstick: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 21 14-9" />
    <circle cx="17" cy="12" r="1" />
    <path d="m17 3 3.62 7.29a4.007 4.007 0 0 1-.764 4.51 4 4 0 0 1-6.493-4.464L17 3z" />
  </svg>
);
