import { Component, ComponentProps } from "solid-js";

export const IconMathSymbols: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 12h18M12 3v18M16.5 4.5l3 3M19.5 4.5l-3 3M6 4v4M4 6h4M18 16h.01M18 20h.01M4 18h4" />
  </svg>
);
