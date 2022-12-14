import { Component, ComponentProps } from "solid-js";

export const IconBrandSuperhuman: Component<ComponentProps<"svg">> = (
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
    <path d="m16 12 4 3-8 7-8-7 4-3" />
    <path d="M12 3 4 9l8 6 8-6zM12 15h8" />
  </svg>
);
