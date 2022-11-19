import { Component, ComponentProps } from "solid-js";

export const IconTrident: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 6 2-2v3a7 7 0 0 0 14 0V4l2 2" />
    <path d="M12 21V3l-2 2m4 0-2-2" />
  </svg>
);
