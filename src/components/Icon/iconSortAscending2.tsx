import { Component, ComponentProps } from "solid-js";

export const IconSortAscending2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m14 9 3-3 3 3" />
    <rect width="5" height="5" x="5" y="5" rx=".5" />
    <rect width="5" height="5" x="5" y="14" rx=".5" />
    <path d="M17 6v12" />
  </svg>
);
