import { Component, ComponentProps } from "solid-js";

export const IconBeer: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 20h6v-4.111a8 8 0 0 1 .845-3.578l.31-.622A8 8 0 0 0 17 8.111V4H7v4.111a8 8 0 0 0 .845 3.578l.31.622A8 8 0 0 1 9 15.889V20zM7 8h10" />
  </svg>
);
