import { Component, ComponentProps } from "solid-js";

export const IconCodeCircle2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.5 13.5 7 12l1.5-1.5M15.5 10.5 17 12l-1.5 1.5" />
    <circle cx="12" cy="12" r="9" />
    <path d="M13 9.5 11 15" />
  </svg>
);
