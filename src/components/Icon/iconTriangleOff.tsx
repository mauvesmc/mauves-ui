import { Component, ComponentProps } from "solid-js";

export const IconTriangleOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 19h14m1.986-2.014a2 2 0 0 0-.146-.736L13.74 4a2 2 0 0 0-3.5 0l-.825 1.424m-1.467 2.53L3.14 16.25A2 2 0 0 0 4.89 19M3 3l18 18" />
  </svg>
);
