import { Component, ComponentProps } from "solid-js";

export const IconBrandNexo: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m17 3 5 3v12l-5 3-10-6V9l10 6V9l-5-3z" />
    <path d="M12 6 7 3 2 6v12l5 3 4.7-3.13" />
  </svg>
);
