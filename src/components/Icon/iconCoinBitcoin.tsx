import { Component, ComponentProps } from "solid-js";

export const IconCoinBitcoin: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M9 8h4.09c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2c1.055 0 1.91.895 1.91 2s-.855 2-1.91 2H9M10 12h4M10 7v10-9M13 7v1M13 16v1" />
  </svg>
);
