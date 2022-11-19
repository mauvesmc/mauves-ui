import { Component, ComponentProps } from "solid-js";

export const IconBrandFinder: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="18" height="16" x="3" y="4" rx="1" />
    <path d="M7 8v1M17 8v1M12.5 4c-.654 1.486-1.26 3.443-1.5 9h2.5c-.19 2.867.094 5.024.5 7" />
    <path d="M7 15.5c3.667 2 6.333 2 10 0" />
  </svg>
);
