import { Component, ComponentProps } from "solid-js";

export const IconApiAppOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 15H5.5a2.5 2.5 0 1 1 0-5H6M15 15v3.5a2.5 2.5 0 1 1-5 0V18M13 9h5.5a2.5 2.5 0 1 1 0 5H18M9 12V9m.042-3.957A2.5 2.5 0 0 1 14 5.5V6M3 3l18 18" />
  </svg>
);
