import { Component, ComponentProps } from "solid-js";

export const IconRadioactive: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m13.5 14.6 3 5.19A9 9 0 0 0 21 12h-6a3 3 0 0 1-1.5 2.6M13.5 9.4l3-5.19a9 9 0 0 0-9 0l3 5.19a3 3 0 0 1 3 0M10.5 14.6l-3 5.19A9 9 0 0 1 3 12h6a3 3 0 0 0 1.5 2.6" />
  </svg>
);
