import { Component, ComponentProps } from "solid-js";

export const IconShovel: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m17 4 3 3M18.5 5.5l-8 8M8.276 11.284l4.44 4.44a.968.968 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1-5.809-5.81l2.704-2.703a.968.968 0 0 1 1.37 0z" />
  </svg>
);
