import { Component, ComponentProps } from "solid-js";

export const IconBrandBackbone: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m5 20 14-8L5 4z" />
    <path d="M19 20 5 12l14-8z" />
  </svg>
);
