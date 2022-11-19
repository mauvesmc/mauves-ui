import { Component, ComponentProps } from "solid-js";

export const IconPercentage: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="17" cy="17" r="1" />
    <circle cx="7" cy="7" r="1" />
    <path d="M6 18 18 6" />
  </svg>
);
