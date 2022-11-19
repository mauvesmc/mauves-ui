import { Component, ComponentProps } from "solid-js";

export const IconArrowsSplit2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M21 17h-5.397a5 5 0 0 1-4.096-2.133l-.514-.734A5 5 0 0 0 6.897 12H3M21 7h-5.395a5 5 0 0 0-4.098 2.135l-.51.73A5 5 0 0 1 6.9 12H3" />
    <path d="m18 10 3-3-3-3M18 20l3-3-3-3" />
  </svg>
);
