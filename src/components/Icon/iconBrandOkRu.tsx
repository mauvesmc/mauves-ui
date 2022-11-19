import { Component, ComponentProps } from "solid-js";

export const IconBrandOkRu: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="9" r="2" />
    <path d="M20 12c0 8 0 8-8 8s-8 0-8-8 0-8 8-8 8 0 8 8z" />
    <path d="M9.5 13c1.333.667 3.667.667 5 0M9.5 17l2.5-3 2.5 3M12 13.5v.5" />
  </svg>
);
