import { Component, ComponentProps } from "solid-js";

export const IconBrandLaravel: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 17 8 5 7-4v-8l-4-2.5L18 5l4 2.5v4L11 18l-4-2.5V8L3 5.5zM11 18v4M7 15.5l7-4M14 7.5v4M14 11.5l4 2.5" />
    <path d="M11 13V5.5L7 3 3 5.5M7 8l4-2.5M18 10l4-2.5" />
  </svg>
);
