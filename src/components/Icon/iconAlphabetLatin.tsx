import { Component, ComponentProps } from "solid-js";

export const IconAlphabetLatin: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 10h2a2 2 0 0 1 2 2v5H7a2 2 0 1 1 0-4h3M14 7v10" />
    <rect width="5" height="7" x="14" y="10" rx="2" />
  </svg>
);
