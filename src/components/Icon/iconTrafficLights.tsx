import { Component, ComponentProps } from "solid-js";

export const IconTrafficLights: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="10" height="20" x="7" y="2" rx="5" />
    <circle cx="12" cy="7" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="17" r="1" />
  </svg>
);
