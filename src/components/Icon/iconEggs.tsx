import { Component, ComponentProps } from "solid-js";

export const IconEggs: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M13 22c-3 0-4.868-2.118-4.995-5C8 14 10 12 13 12c4 0 8.01 2.5 8.005 5C21 19.5 17 22 13 22z" />
    <path d="M8 18c-3.03-.196-5-2.309-5-5.38C3 8.313 5.75 3.995 8.5 4c2.614.005 5.248 3.915 5.5 8" />
  </svg>
);
