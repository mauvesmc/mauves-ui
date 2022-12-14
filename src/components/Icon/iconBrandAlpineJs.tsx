import { Component, ComponentProps } from "solid-js";

export const IconBrandAlpineJs: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 11.5 7.5 16h9l-9-9z" />
    <path d="m16.5 16 4.5-4.5L16.5 7 12 11.5" />
  </svg>
);
