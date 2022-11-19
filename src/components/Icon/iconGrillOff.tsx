import { Component, ComponentProps } from "solid-js";

export const IconGrillOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 8H5a6 6 0 0 0 6 6h2c.315 0 .624-.024.926-.071m2.786-1.214a5.99 5.99 0 0 0 2.284-4.49L19 8h-7M18.827 18.815a2 2 0 1 1-2.663-2.633M9 14l-3 6M15 18H7M15 5V4M12 5V4M9 5V4M3 3l18 18" />
  </svg>
);
