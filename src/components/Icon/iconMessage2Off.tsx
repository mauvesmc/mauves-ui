import { Component, ComponentProps } from "solid-js";

export const IconMessage2Off: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 5h8a3 3 0 0 1 3 3v6a2.97 2.97 0 0 1-.44 1.563M17 17h-2l-3 3-3-3H7a3 3 0 0 1-3-3V8c0-1.092.584-2.049 1.457-2.573M8 9h1m4 0h3M8 13h5M3 3l18 18" />
  </svg>
);
