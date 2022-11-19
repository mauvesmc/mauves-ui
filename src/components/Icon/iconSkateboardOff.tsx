import { Component, ComponentProps } from "solid-js";

export const IconSkateboardOff: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="7" cy="15" r="2" />
    <path d="M15 15a2 2 0 0 0 2 2m2-2a2 2 0 0 0-2-2M3 9c0 .552.895 1 2 1h5m4 0h5c1.105 0 2-.448 2-1M3 3l18 18" />
  </svg>
);
