import { Component, ComponentProps } from "solid-js";

export const IconBusOff: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="6" cy="17" r="2" />
    <path d="M16.18 16.172a2 2 0 0 0 2.652 2.648M4 17H2V6a1 1 0 0 1 1-1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0H8" />
    <path d="m16 5 1.5 7H22M2 10h8m4 0h3M7 7v3M12 5v3M3 3l18 18" />
  </svg>
);
