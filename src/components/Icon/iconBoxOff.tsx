import { Component, ComponentProps } from "solid-js";

export const IconBoxOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17.765 17.757 12 21l-8-4.5v-9l2.236-1.258m2.57-1.445L12 3l8 4.5V16M14.561 10.559 20 7.5M12 12v9M12 12 4 7.5M3 3l18 18" />
  </svg>
);
