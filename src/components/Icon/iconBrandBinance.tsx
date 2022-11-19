import { Component, ComponentProps } from "solid-js";

export const IconBrandBinance: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m6 8 2 2 4-4 4 4 2-2-6-6zM6 16l2-2 4 4 3.5-3.5 2 2L12 22zM20 10l1.997 2.001L20 14l-2-2zM4 10l2 2-2 2-2-2zM12 10l2 2-2 2-2-2z" />
  </svg>
);
