import { Component, ComponentProps } from "solid-js";

export const IconExchangeOff: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="5" cy="18" r="2" />
    <circle cx="19" cy="6" r="2" />
    <path d="M19 8v5c0 .594-.104 1.164-.294 1.692m-1.692 2.298A4.978 4.978 0 0 1 14 18h-3l3-3M14 21l-3-3M5 16v-5c0-1.632.782-3.082 1.992-3.995M10 6h3l-3-3M11.501 7.499 13 6M3 3l18 18" />
  </svg>
);
