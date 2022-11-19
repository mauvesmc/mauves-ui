import { Component, ComponentProps } from "solid-js";

export const IconMicrophoneOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3 3 18 18M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1-.13.874m-2 2A3 3 0 0 1 9 10.002v-1" />
    <path d="M5 10a7 7 0 0 0 10.846 5.85m2.002-2A6.967 6.967 0 0 0 19 10M8 21h8M12 17v4" />
  </svg>
);
