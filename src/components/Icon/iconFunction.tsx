import { Component, ComponentProps } from "solid-js";

export const IconFunction: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="16" height="16" x="4" y="4" rx="2.667" />
    <path d="M9 15.5v.25c0 .69.56 1.25 1.25 1.25a1.38 1.38 0 0 0 1.374-1.244l.752-7.512A1.381 1.381 0 0 1 13.75 7c.69 0 1.25.56 1.25 1.25v.25M9 12h6" />
  </svg>
);
