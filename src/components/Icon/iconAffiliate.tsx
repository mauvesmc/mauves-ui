import { Component, ComponentProps } from "solid-js";

export const IconAffiliate: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m5.931 6.936 1.275 4.249m5.607 5.609 4.251 1.275M11.683 12.317l5.759-5.759" />
    <circle cx="5.5" cy="5.5" r="1.5" />
    <circle cx="18.5" cy="5.5" r="1.5" />
    <circle cx="18.5" cy="18.5" r="1.5" />
    <circle cx="8.5" cy="15.5" r="4.5" />
  </svg>
);
