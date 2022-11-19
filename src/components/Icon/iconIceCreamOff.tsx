import { Component, ComponentProps } from "solid-js";

export const IconIceCreamOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 21.5V17M8 8v9h8v-1m0-4V7a4 4 0 0 0-7.277-2.294M8 10.5l1.74-.76m2.79-1.222L16 7M8 14.5l4.488-1.964M3 3l18 18" />
  </svg>
);
