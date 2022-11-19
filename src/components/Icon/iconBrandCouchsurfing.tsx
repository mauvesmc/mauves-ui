import { Component, ComponentProps } from "solid-js";

export const IconBrandCouchsurfing: Component<ComponentProps<"svg">> = (
  props
) => (
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
    <path d="M3.1 13c3.267 0 5.9-.167 7.9-.5 3-.5 4-2 4-3.5a3 3 0 1 0-6 0c0 1.554 1.807 3.005 3 4 1.193.995 2 2.5 2 3.5a1.5 1.5 0 1 1-3 0c0-2 4-3.5 7-3.5h2.9" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);
