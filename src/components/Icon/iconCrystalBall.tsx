import { Component, ComponentProps } from "solid-js";

export const IconCrystalBall: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6.73 17.018a8 8 0 1 1 10.54 0" />
    <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 1 0 0-4H7a2 2 0 0 0-2 2zM11 7a3 3 0 0 0-3 3" />
  </svg>
);
