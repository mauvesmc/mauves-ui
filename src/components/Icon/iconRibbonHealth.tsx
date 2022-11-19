import { Component, ComponentProps } from "solid-js";

export const IconRibbonHealth: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 21s9.286-9.841 9.286-13.841a3.864 3.864 0 0 0-1.182-3.008A4.13 4.13 0 0 0 12 3.007 4.13 4.13 0 0 0 8.896 4.15a3.864 3.864 0 0 0-1.182 3.01C7.714 11.159 17 21 17 21" />
  </svg>
);
