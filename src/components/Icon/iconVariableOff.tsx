import { Component, ComponentProps } from "solid-js";

export const IconVariableOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4.675 4.68C2.505 9.456 2.613 14.272 5 20M19 4c1.959 3.917 2.383 7.834 1.272 12.232m-.983 3.051c-.093.238-.189.477-.289.717M11.696 11.696c.095.257.2.533.32.831C13 15 13 16 14 16h1" />
    <path d="M8 16c1.5 0 3-2 4-3.5m2.022-2.514C14.651 9.404 15.326 9 16 9M3 3l18 18" />
  </svg>
);
