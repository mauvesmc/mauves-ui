import { Component, ComponentProps } from "solid-js";

export const IconWiper: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="18" r="1" />
    <path d="m3 9 5.5 5.5a5 5 0 0 1 7 0L21 9A12 12 0 0 0 3 9M12 18 9.8 5.2" />
  </svg>
);
