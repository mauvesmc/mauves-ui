import { Component, ComponentProps } from "solid-js";

export const IconEmpathize: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="5.5" r="2.5" />
    <path d="m12 21.368 5.095-5.096a3.088 3.088 0 1 0-4.367-4.367l-.728.727-.728-.727a3.088 3.088 0 1 0-4.367 4.367L12 21.368z" />
  </svg>
);
