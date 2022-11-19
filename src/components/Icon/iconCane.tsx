import { Component, ComponentProps } from "solid-js";

export const IconCane: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m9 21 6.324-11.69c.54-.974 1.756-4.104-1.499-5.762C10.57 1.891 8.65 4.411 8 5.58" />
  </svg>
);
