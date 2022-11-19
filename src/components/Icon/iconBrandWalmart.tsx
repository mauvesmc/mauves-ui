import { Component, ComponentProps } from "solid-js";

export const IconBrandWalmart: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 8.04V3M15.5 10 20 7.5M15.5 14l4.5 2.5M12 15.96V21M8.5 14 4 16.5M8.5 10 4 7.495" />
  </svg>
);
