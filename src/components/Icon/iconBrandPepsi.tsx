import { Component, ComponentProps } from "solid-js";

export const IconBrandPepsi: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M4 16c5.713-2.973 11-3.5 13.449-11.162" />
    <path d="M5 17.5c5.118-2.859 15 0 14-11" />
  </svg>
);
