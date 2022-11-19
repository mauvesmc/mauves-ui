import { Component, ComponentProps } from "solid-js";

export const IconLifebuoyOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9.171 9.172a4 4 0 0 0 5.65 5.663M16 12a4 4 0 0 0-4-4" />
    <path d="M5.64 5.632a9 9 0 1 0 12.73 12.725m1.667-2.301A9 9 0 0 0 7.96 3.956M15 15l3.35 3.35M9 15l-3.35 3.35M5.65 5.65 9 9M18.35 5.65 15 9M3 3l18 18" />
  </svg>
);
