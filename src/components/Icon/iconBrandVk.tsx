import { Component, ComponentProps } from "solid-js";

export const IconBrandVk: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14 19h-4a8 8 0 0 1-8-8V6h4v5a4 4 0 0 0 4 4h0V6h4v4.5l.03-.004A4.531 4.531 0 0 0 18 6h4l-.342 1.711A6.858 6.858 0 0 1 18 12.5h0a5.34 5.34 0 0 1 3.566 4.111L22 19h0-4a4.531 4.531 0 0 0-3.97-4.496v4.5z" />
  </svg>
);
