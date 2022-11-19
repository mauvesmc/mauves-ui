import { Component, ComponentProps } from "solid-js";

export const IconSignatureOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 17c3.333-3.333 5-6 5-8 0-.394-.017-.735-.05-1.033M6 6C5 6 3.968 7.085 4 9c.034 2.048 1.658 4.877 2.5 6C8 17 9 17.5 10 16l2-3c.333 2.667 1.333 4 3 4 .219 0 .708-.341 1.231-.742M20 16c.303.245.64.677 1 1M3 3l18 18" />
  </svg>
);
