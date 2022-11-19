import { Component, ComponentProps } from "solid-js";

export const IconMassage: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="4" cy="17" r="1" />
    <circle cx="9" cy="5" r="1" />
    <path d="m4 22 4-2v-3h12M11 20h9M8 14l3-2 1-4c3 1 3 4 3 6" />
  </svg>
);
