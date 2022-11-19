import { Component, ComponentProps } from "solid-js";

export const IconDeviceCctvOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 7H4a1 1 0 0 1-1-1V4c0-.275.11-.523.29-.704M7 3h13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-9M10.36 10.35a4 4 0 1 0 5.285 5.3" />
    <path d="M19 7v7c0 .321-.022.637-.064.947m-1.095 2.913A7 7 0 0 1 5 14l-.001-7M12 14h.01M3 3l18 18" />
  </svg>
);
