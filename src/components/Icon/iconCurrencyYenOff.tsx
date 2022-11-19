import { Component, ComponentProps } from "solid-js";

export const IconCurrencyYenOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 19v-7m5-7-3.328 4.66M8 17h8M8 13h5M3 3l18 18" />
  </svg>
);
