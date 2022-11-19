import { Component, ComponentProps } from "solid-js";

export const IconMacro: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 15a6 6 0 1 0 12 0" />
    <path d="M18 15a6 6 0 0 0-6 6M12 21a6 6 0 0 0-6-6M12 21V11M12 11a5 5 0 0 1-5-5V3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-5 5z" />
  </svg>
);
