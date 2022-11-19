import { Component, ComponentProps } from "solid-js";

export const IconBrandNextjs: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9" />
  </svg>
);
