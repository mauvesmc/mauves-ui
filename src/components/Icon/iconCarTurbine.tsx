import { Component, ComponentProps } from "solid-js";

export const IconCarTurbine: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="11" cy="13" r="4" />
    <path d="M18.86 11c.088.66.14 1.512.14 2a8 8 0 1 1-8-8h6" />
    <path d="M11 9c2.489.108 4.489.108 6 0" />
    <rect width="4" height="8" x="17" y="3" rx="1" />
    <path d="m11 13-3.5-1.5M11 13l2.5 3M8.5 16l2.5-3M11 13l3.5-1.5M11 9v4" />
  </svg>
);
