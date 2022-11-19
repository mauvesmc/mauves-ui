import { Component, ComponentProps } from "solid-js";

export const IconAtom2: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="3" />
    <path d="M12 21v.01M3 9v.01M21 9v.01M8 20.1A9 9 0 0 1 3 13M16 20.1a9 9 0 0 0 5-7.1M6.2 5a9 9 0 0 1 11.4 0" />
  </svg>
);
