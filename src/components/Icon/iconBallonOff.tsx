import { Component, ComponentProps } from "solid-js";

export const IconBallonOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14 8a2 2 0 0 0-2-2" />
    <path d="M7.762 3.753A6 6 0 0 1 18 8c0 1.847-.37 3.564-1.007 4.993m-1.59 2.42C14.436 16.414 13.263 17 12 17c-3.314 0-6-4.03-6-9 0-.593.086-1.166.246-1.707M12 17v1a2 2 0 0 1-2 2H7a2 2 0 0 0-2 2M3 3l18 18" />
  </svg>
);