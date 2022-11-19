import { Component, ComponentProps } from "solid-js";

export const IconLinkOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M10 14a3.5 3.5 0 0 0 4.47.444m2.025-1.94c.557-.556 1.392-1.39 2.505-2.504a3.536 3.536 0 0 0-5-5l-.5.5" />
    <path d="M9.548 9.544A3.5 3.5 0 0 0 9 10l-4 4a3.536 3.536 0 0 0 5 5l.5-.5M3 3l18 18M3 3l18 18" />
  </svg>
);
