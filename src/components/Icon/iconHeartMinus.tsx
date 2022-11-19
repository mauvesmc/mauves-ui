import { Component, ComponentProps } from "solid-js";

export const IconHeartMinus: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m13 19-1 1-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8 6M14 16h6" />
  </svg>
);
