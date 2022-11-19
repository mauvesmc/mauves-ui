import { Component, ComponentProps } from "solid-js";

export const IconBrandSpacehey: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="17" cy="6" r="2" />
    <path d="M14 20h6v-6a3 3 0 0 0-6 0v6zM11 8v2.5A3.5 3.5 0 0 1 7.5 14H7a3 3 0 0 1 0-6h4z" />
  </svg>
);
