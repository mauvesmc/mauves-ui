import { Component, ComponentProps } from "solid-js";

export const IconBrandCupra: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4.5 10 2 6l15.298 6.909a.2.2 0 0 1 .09.283L14 19" />
    <path d="m10 19-3.388-5.808a.2.2 0 0 1 .09-.283L22 6l-2.5 4" />
  </svg>
);
