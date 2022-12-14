import { Component, ComponentProps } from "solid-js";

export const IconBrandComedyCentral: Component<ComponentProps<"svg">> = (
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
    <path d="M5.343 17.657a8 8 0 1 0 0-11.314" />
    <path d="M13.828 9.172a4 4 0 1 0 0 5.656" />
  </svg>
);
