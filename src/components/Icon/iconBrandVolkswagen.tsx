import { Component, ComponentProps } from "solid-js";

export const IconBrandVolkswagen: Component<ComponentProps<"svg">> = (
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
    <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9z" />
    <path d="m5 7 4.5 11 1.5-5h2l1.5 5L19 7" />
    <path d="m9 4 2 6h2l2-6" />
  </svg>
);
