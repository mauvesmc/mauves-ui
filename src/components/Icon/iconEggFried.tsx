import { Component, ComponentProps } from "solid-js";

export const IconEggFried: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="3" />
    <path d="M14 3a5 5 0 0 1 4.872 6.13 3 3 0 0 1 .178 5.681 3 3 0 1 1-4.684 3.626 5 5 0 1 1-8.662-4.996 5 5 0 1 1 4.645-8.856A4.982 4.982 0 0 1 14 3z" />
  </svg>
);
