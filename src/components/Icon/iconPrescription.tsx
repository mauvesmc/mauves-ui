import { Component, ComponentProps } from "solid-js";

export const IconPrescription: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 19V3h4.5a4.5 4.5 0 1 1 0 9H6M19 21l-9-9M13 21l6-6" />
  </svg>
);
