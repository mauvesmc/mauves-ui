import { Component, ComponentProps } from "solid-js";

export const IconDirectionSign: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m3.32 12.774 7.906 7.905c.427.428 1.12.428 1.548 0l7.905-7.905a1.095 1.095 0 0 0 0-1.548l-7.905-7.905a1.095 1.095 0 0 0-1.548 0l-7.905 7.905a1.095 1.095 0 0 0 0 1.548zM8 12h7.5" />
    <path d="m12 8.5 3.5 3.5-3.5 3.5" />
  </svg>
);