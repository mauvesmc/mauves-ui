import { Component, ComponentProps } from "solid-js";

export const IconBrandStackoverflow: Component<ComponentProps<"svg">> = (
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
    <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1M8 16h8M8.322 12.582l7.956.836M8.787 9.168l7.826 1.664M10.096 5.764l7.608 2.472" />
  </svg>
);
