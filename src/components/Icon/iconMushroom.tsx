import { Component, ComponentProps } from "solid-js";

export const IconMushroom: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M20 11.1C20 6.626 16.418 3 12 3s-8 3.626-8 8.1a.9.9 0 0 0 .9.9h14.2a.9.9 0 0 0 .9-.9zM10 12v7a2 2 0 1 0 4 0v-7" />
  </svg>
);
