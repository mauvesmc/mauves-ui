import { Component, ComponentProps } from "solid-js";

export const IconBrandNetflix: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m9 3 10 18h-4L5 3zM5 3v18h4V10.5M19 21V3h-4v10.5" />
  </svg>
);
