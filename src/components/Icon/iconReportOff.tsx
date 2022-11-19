import { Component, ComponentProps } from "solid-js";

export const IconReportOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5.576 5.595A1.994 1.994 0 0 0 5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4V7a2 2 0 0 0-2-2h-2" />
    <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2M3 3l18 18" />
  </svg>
);
