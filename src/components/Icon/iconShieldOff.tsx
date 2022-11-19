import { Component, ComponentProps } from "solid-js";

export const IconShieldOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M17.669 17.669A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6c.797.036 1.589 0 2.366-.126m3.092-.912A12 12 0 0 0 12 3a12 12 0 0 0 8.5 3 12 12 0 0 1-1.117 9.379" />
  </svg>
);
