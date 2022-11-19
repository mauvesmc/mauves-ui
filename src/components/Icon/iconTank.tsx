import { Component, ComponentProps } from "solid-js";

export const IconTank: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="18" height="6" x="2" y="12" rx="3" />
    <path d="m6 12 1-5h5l3 5M21 9h-7.8" />
  </svg>
);
