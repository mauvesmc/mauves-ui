import { Component, ComponentProps } from "solid-js";

export const IconRuler2Off: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12.03 7.97 17 3l4 4-5 5m-2 2-7 7-4-4 7-7M16 7l-1.5-1.5M10 13l-1.5-1.5M7 16l-1.5-1.5M3 3l18 18" />
  </svg>
);
