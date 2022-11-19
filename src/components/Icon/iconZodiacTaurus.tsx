import { Component, ComponentProps } from "solid-js";

export const IconZodiacTaurus: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 3a6 6 0 0 0 12 0" />
    <circle cx="12" cy="15" r="6" />
  </svg>
);