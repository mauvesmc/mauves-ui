import { Component, ComponentProps } from "solid-js";

export const IconAward: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="9" r="6" />
    <path d="m12.002 15.003 3.4 5.89L17 17.66l3.598.232-3.4-5.889M6.802 12.003l-3.4 5.89L7 17.66l1.598 3.232 3.4-5.889" />
  </svg>
);
