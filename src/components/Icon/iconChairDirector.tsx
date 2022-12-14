import { Component, ComponentProps } from "solid-js";

export const IconChairDirector: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m6 21 12-9M6 12l12 9M5 12h14M6 3v9M18 3v9M6 8h12M6 5h12" />
  </svg>
);
