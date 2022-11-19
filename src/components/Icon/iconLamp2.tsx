import { Component, ComponentProps } from "solid-js";

export const IconLamp2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 21h9M10 21l-7-8 8.5-5.5" />
    <path d="M13 14c-2.148-2.148-2.148-5.852 0-8 2.088-2.088 5.842-1.972 8 0l-8 8z" />
    <path d="m11.742 7.574-1.156-1.156a2 2 0 0 1 2.828-2.829l1.144 1.144M15.5 11.995l.208.274a2.527 2.527 0 0 0 3.556 0c.939-.933.98-2.42.122-3.4L19.02 8.5" />
  </svg>
);
