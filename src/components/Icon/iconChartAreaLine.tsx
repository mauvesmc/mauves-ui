import { Component, ComponentProps } from "solid-js";

export const IconChartAreaLine: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m4 19 4-6 4 2 4-5 4 4v5H4M4 12l3-4 4 2 5-6 4 4" />
  </svg>
);
