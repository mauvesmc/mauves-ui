import { Component, ComponentProps } from "solid-js";

export const IconSchool: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M22 9 12 5 2 9l10 4 10-4v6" />
    <path d="M6 10.6V16a6 3 0 0 0 12 0v-5.4" />
  </svg>
);
