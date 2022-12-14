import { Component, ComponentProps } from "solid-js";

export const Icon3DRotate: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 3a7 7 0 0 1 7 7v4l-3-3M22 11l-3 3M8 15.5l-5-3 5-3 5 3V18l-5 3z" />
    <path d="M3 12.5V18l5 3M8 15.545l5-3.03" />
  </svg>
);
