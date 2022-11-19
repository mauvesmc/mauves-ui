import { Component, ComponentProps } from "solid-js";

export const IconClockPlay: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 7v5l2 2M17 22l5-3-5-3z" />
    <path d="M13.017 20.943a9 9 0 1 1 7.831-7.292" />
  </svg>
);
