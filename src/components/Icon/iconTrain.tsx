import { Component, ComponentProps } from "solid-js";

export const IconTrain: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M21 13c0-3.87-3.37-7-10-7H3M3 15h16a2 2 0 0 0 2-2" />
    <path d="M3 6v5h17.5M3 10v4M8 11V6M13 11V6.5M3 19h18" />
  </svg>
);
