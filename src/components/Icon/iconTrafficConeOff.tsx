import { Component, ComponentProps } from "solid-js";

export const IconTrafficConeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 20h16M9.4 10h.6m4 0h.6M7.8 15H15M6 20 9.5 9.5M10.5 6.5 11 5h2l2 6m2 6 1 3M3 3l18 18" />
  </svg>
);
