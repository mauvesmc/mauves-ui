import { Component, ComponentProps } from "solid-js";

export const IconNavigation: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m12 18.5 7.265 2.463a.535.535 0 0 0 .57-.116.548.548 0 0 0 .134-.572L12 3 4.03 20.275a.547.547 0 0 0 .135.572.535.535 0 0 0 .57.116L12 18.5" />
  </svg>
);
