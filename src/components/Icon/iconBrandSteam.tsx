import { Component, ComponentProps } from "solid-js";

export const IconBrandSteam: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16.5 5a4.5 4.5 0 1 1-.653 8.953L11.5 16.962V17a3 3 0 0 1-2.824 2.995L8.5 20a3 3 0 0 1-2.94-2.402L3 16.5V13l3.51 1.755a2.989 2.989 0 0 1 2.834-.635l2.727-3.818A4.5 4.5 0 0 1 16.5 5z" />
    <circle cx="16.5" cy="9.5" r="1" fill="currentColor" />
  </svg>
);
