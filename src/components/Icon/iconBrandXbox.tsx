import { Component, ComponentProps } from "solid-js";

export const IconBrandXbox: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" />
    <path d="M17.5 5C9.78 7.266 7.463 12.597 5 17.5" />
  </svg>
);
