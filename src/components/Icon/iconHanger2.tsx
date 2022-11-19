import { Component, ComponentProps } from "solid-js";

export const IconHanger2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m12 9-7.971 4.428A2 2 0 0 0 3 15.177V16a2 2 0 0 0 2 2h1" />
    <path d="M18 18h1a2 2 0 0 0 2-2v-.823a2 2 0 0 0-1.029-1.749L12 9c-1.457-.81-1.993-2.333-1.996-4a2 2 0 1 1 4 0" />
    <rect width="12" height="5" x="6" y="16" rx="2" />
  </svg>
);
