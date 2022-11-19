import { Component, ComponentProps } from "solid-js";

export const IconTransform: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5 13v.875C5 17.258 7.686 20 11 20" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <path d="m16 9 2 2 2-2" />
    <path d="M18 10v-.875C18 5.742 15.314 3 12 3M3 15l2-2 2 2" />
  </svg>
);
