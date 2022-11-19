import { Component, ComponentProps } from "solid-js";

export const IconRadioOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14 3 9.014 4.995m-2.875 1.15-1.51.604A1 1 0 0 0 4 7.677V19a1 1 0 0 0 1 1h14a.997.997 0 0 0 .708-.294M20 16V8a1 1 0 0 0-1-1h-8M7 7H4.5M4 12h8m4 0h4M7 12v-2M13 16v.01M3 3l18 18" />
  </svg>
);
