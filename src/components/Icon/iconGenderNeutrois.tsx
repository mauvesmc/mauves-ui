import { Component, ComponentProps } from "solid-js";

export const IconGenderNeutrois: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 10a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM12 10V3" />
  </svg>
);
