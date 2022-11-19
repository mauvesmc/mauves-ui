import { Component, ComponentProps } from "solid-js";

export const IconMicroscope: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 21h14M6 18h2M7 18v3M9 11l3 3 6-6-3-3zM10.5 12.5 9 14M17 3l3 3M12 21a6 6 0 0 0 3.715-10.712" />
  </svg>
);
