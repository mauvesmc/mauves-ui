import { Component, ComponentProps } from "solid-js";

export const IconBrandMyOppo: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18.316 5H5.684L2.266 9.019a1.089 1.089 0 0 0 .019 1.447L11.999 21l9.715-10.49a1.09 1.09 0 0 0 .024-1.444L18.316 5z" />
    <path d="m9 11 3 3 3-3" />
  </svg>
);
