import { Component, ComponentProps } from "solid-js";

export const IconBread: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 5a3 3 0 0 1 2 5.235V17a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6.764a3 3 0 0 1 1.824-5.231L7 5h10z" />
  </svg>
);
