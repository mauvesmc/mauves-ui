import { Component, ComponentProps } from "solid-js";

export const IconArrowsJoin2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 7h1.948c1.913 0 3.705.933 4.802 2.5a5.861 5.861 0 0 0 4.802 2.5H21" />
    <path d="M3 17h1.95a5.854 5.854 0 0 0 4.798-2.5 5.854 5.854 0 0 1 4.798-2.5H20" />
    <path d="m18 15 3-3-3-3" />
  </svg>
);
