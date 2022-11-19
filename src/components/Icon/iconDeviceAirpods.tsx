import { Component, ComponentProps } from "solid-js";

export const IconDeviceAirpods: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 4a4 4 0 0 1 3.995 3.8L10 8v10.5a1.5 1.5 0 0 1-3 0V12H6a4 4 0 0 1-3.995-3.8L2 8a4 4 0 0 1 4-4zM18 4a4 4 0 0 0-3.995 3.8L14 8v10.5a1.5 1.5 0 0 0 3 0V12h1a4 4 0 0 0 3.995-3.8L22 8a4 4 0 0 0-4-4z" />
  </svg>
);
