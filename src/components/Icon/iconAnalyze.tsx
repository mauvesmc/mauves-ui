import { Component, ComponentProps } from "solid-js";

export const IconAnalyze: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 11a8.1 8.1 0 0 0-6.986-6.918A8.095 8.095 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 15.001 2.998" />
    <circle cx="19" cy="16" r="1" />
    <circle cx="5" cy="8" r="1" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
