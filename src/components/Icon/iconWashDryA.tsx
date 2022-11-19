import { Component, ComponentProps } from "solid-js";

export const IconWashDryA: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M9 16v-4.8C9 9.543 10.343 8 12 8s3 1.543 3 3.2V16M15 13H9" />
  </svg>
);
