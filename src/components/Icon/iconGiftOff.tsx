import { Component, ComponentProps } from "solid-js";

export const IconGiftOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 8h8a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4m-4 0H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h4M12 12v9" />
    <path d="M19 12v3m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1-2.457-2.963m2.023-2C7.206 3.014 7.352 3 7.5 3c1.974-.034 3.76 1.95 4.5 5 .74-3.05 2.526-5.034 4.5-5a2.5 2.5 0 1 1 0 5M3 3l18 18" />
  </svg>
);
