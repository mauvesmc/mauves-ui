import { Component, ComponentProps } from "solid-js";

export const IconFlaskOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 3h6M13 9h1M10 3v3m-.268 3.736L6 20a.7.7 0 0 0 .5 1h11a.7.7 0 0 0 .5-1l-1.143-3.142m-2.288-6.294L14 9V3M3 3l18 18" />
  </svg>
);
