import { Component, ComponentProps } from "solid-js";

export const IconSpade: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m12 3 4.919 4.5c.61.587 1.177 1.177 1.703 1.771a5.527 5.527 0 0 1 .264 6.979c-1.18 1.56-3.338 1.92-4.886.75v1l1 3H9l1-3v-1c-1.54 1.07-3.735.772-4.886-.75a5.527 5.527 0 0 1 .264-6.979A30.883 30.883 0 0 1 7.081 7.5 1541.72 1541.72 0 0 1 12 3z" />
  </svg>
);
