import { Component, ComponentProps } from "solid-js";

export const IconZeppelin: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13.5 4c4.694 0 8.5 2.686 8.5 6s-3.806 6-8.5 6c-2.13 0-4.584-.926-7.364-2.777L4 15v-3.33A46.07 46.07 0 0 1 2 10a46.07 46.07 0 0 1 2-1.67V5l2.135 1.778C8.915 4.926 11.37 4 13.5 4z" />
    <path d="M10 15.5V20h6v-4" />
  </svg>
);
