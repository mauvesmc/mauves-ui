import { Component, ComponentProps } from "solid-js";

export const IconBrandWordpress: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9.5 9h3M4 9h2.5M11 9l3 11 4-9M5.5 9 9 20l3-7M18 11c.177-.528 1-1.364 1-2.5 0-1.78-.776-2.5-1.875-2.5C16.227 6 16 6.812 16 7.429c0 1.83 2 2.058 2 3.571z" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);
