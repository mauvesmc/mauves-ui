import { Component, ComponentProps } from "solid-js";

export const IconArrowsJoin: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 7h5l3.5 5H21M3 17h5l3.495-5" />
    <path d="m18 15 3-3-3-3" />
  </svg>
);
