import { Component, ComponentProps } from "solid-js";

export const IconBrandWindy: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 4c0 5.5-.33 16 4 16s7.546-11.27 8-13" />
    <path d="M3 4c.253 5.44 1.449 16 5.894 16C13.338 20 17.314 9.964 18 6" />
  </svg>
);
