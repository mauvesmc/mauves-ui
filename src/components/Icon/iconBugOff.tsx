import { Component, ComponentProps } from "solid-js";

export const IconBugOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9.884 5.873A3 3 0 0 1 15 8v1M13 9h3a6 6 0 0 1 1 3v1m-.298 3.705A5.002 5.002 0 0 1 7 15v-3a6 6 0 0 1 1-3h1M3 13h4M17 13h4M12 20v-6M4 19l3.35-2M4 7l3.75 2.4M20 7l-3.75 2.4M3 3l18 18" />
  </svg>
);
