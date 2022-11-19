import { Component, ComponentProps } from "solid-js";

export const IconRadar: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M21 12h-8a1 1 0 1 0-1 1v8a9 9 0 0 0 9-9" />
    <path d="M15.999 8.998A5 5 0 1 0 9 16.001" />
    <path d="M20.486 8.995A9 9 0 1 0 9.004 20.49" />
  </svg>
);
