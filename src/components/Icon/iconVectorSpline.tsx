import { Component, ComponentProps } from "solid-js";

export const IconVectorSpline: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="4" height="4" x="17" y="3" rx="1" />
    <rect width="4" height="4" x="3" y="17" rx="1" />
    <path d="M17 5C10.373 5 5 10.373 5 17" />
  </svg>
);
