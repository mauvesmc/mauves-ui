import { Component, ComponentProps } from "solid-js";

export const IconUsb: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="19" r="2" />
    <path d="M12 17V5.5M7 10v3l5 3M12 14.5l5-2V10M16 10h2V8h-2z" />
    <circle cx="7" cy="9" r="1" />
    <path d="M10 5.5h4L12 3z" />
  </svg>
);
