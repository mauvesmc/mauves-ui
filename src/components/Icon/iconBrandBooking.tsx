import { Component, ComponentProps } from "solid-js";

export const IconBrandBooking: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 18V8.5A4.5 4.5 0 0 1 8.5 4h7A4.5 4.5 0 0 1 20 8.5v7a4.5 4.5 0 0 1-4.5 4.5H6a2 2 0 0 1-2-2z" />
    <path d="M8 12h3.5a2 2 0 1 1 0 4H8V9a1 1 0 0 1 1-1h1.5a2 2 0 1 1 0 4H9M16 16h.01" />
  </svg>
);
