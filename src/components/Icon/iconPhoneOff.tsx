import { Component, ComponentProps } from "solid-js";

export const IconPhoneOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 21 21 3M5.831 14.161A15.946 15.946 0 0 1 3 6a2 2 0 0 1 2-2h4l2 5-2.5 1.5c.108.22.223.435.345.645m1.751 2.277A11.03 11.03 0 0 0 13.5 15.5L15 13l5 2v4a2 2 0 0 1-2 2 15.963 15.963 0 0 1-10.344-4.657" />
  </svg>
);
