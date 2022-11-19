import { Component, ComponentProps } from "solid-js";

export const IconBrandReason: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M18 18h-3v-6h3M18 15h-3M8 18v-6h2.5a1.5 1.5 0 0 1 0 3H8M12 18l-2-3" />
  </svg>
);
