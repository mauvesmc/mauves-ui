import { Component, ComponentProps } from "solid-js";

export const IconGoGame: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="6" cy="6" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M3 12h7m4 0h7M3 6h1m4 0h13M3 18h1m4 0h8m4 0h1M6 3v1m0 4v8m0 4v1M12 3v7m0 4v7M18 3v13m0 4v1" />
  </svg>
);
