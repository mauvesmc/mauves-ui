import { Component, ComponentProps } from "solid-js";

export const IconVipOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 5h2m4 0h12M3 19h16M4 9l2 6h1l2-6M12 12v3M16 12V9h2a2 2 0 1 1 0 4h-1M3 3l18 18" />
  </svg>
);
