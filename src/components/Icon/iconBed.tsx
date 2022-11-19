import { Component, ComponentProps } from "solid-js";

export const IconBed: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 7v11m0-4h18m0 4v-8a2 2 0 0 0-2-2h-8v6" />
    <circle cx="7" cy="10" r="1" />
  </svg>
);
