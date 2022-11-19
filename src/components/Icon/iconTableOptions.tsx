import { Component, ComponentProps } from "solid-js";

export const IconTableOptions: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M4 10h16M10 4v9" />
    <circle cx="5.281" cy="18.5" r="2" />
    <path d="M5.281 15v1.5M5.281 20.5V22M8.312 16.75l-1.299.75M3.55 19.5l-1.3.75M2.25 16.75l1.3.75M7.013 19.5l1.3.75" />
  </svg>
);
