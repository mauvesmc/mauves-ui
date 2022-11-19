import { Component, ComponentProps } from "solid-js";

export const IconGenderBigender: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="11" cy="11" r="4" />
    <path d="m19 3-5 5M15 3h4v4M11 16v6M8 19h6" />
  </svg>
);
