import { Component, ComponentProps } from "solid-js";

export const IconRainbowOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M22 17c0-5.523-4.477-10-10-10-.308 0-.613.014-.914.041m-3.208.845A10.002 10.002 0 0 0 2 17M11.088 11.069A6.001 6.001 0 0 0 6 17M14 17a2 2 0 1 0-4 0M3 3l18 18" />
  </svg>
);
