import { Component, ComponentProps } from "solid-js";

export const IconGardenCart: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="17.5" cy="17.5" r="2.5" />
    <path d="M6 8v11a1 1 0 0 0 1.806.591L11.5 14.5v.055" />
    <path d="M6 8h15l-3.5 7-7.1-.747a4 4 0 0 1-3.296-2.493L4.251 4.63A1 1 0 0 0 3.323 4H2" />
  </svg>
);
