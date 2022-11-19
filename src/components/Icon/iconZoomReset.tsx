import { Component, ComponentProps } from "solid-js";

export const IconZoomReset: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m21 21-6-6M3.268 12.043A7.017 7.017 0 0 0 9.902 17a7.012 7.012 0 0 0 7.043-6.131 7 7 0 0 0-5.314-7.672A7.021 7.021 0 0 0 3.39 7.6" />
    <path d="M3 4v4h4" />
  </svg>
);
