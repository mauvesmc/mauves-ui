import { Component, ComponentProps } from "solid-js";

export const IconTiltShift: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12M3.69 15.44a9 9 0 0 0 1.95 2.92M8.56 20.31A9 9 0 0 0 12 21M15.44 20.31a9 9 0 0 0 2.92-1.95M20.31 15.44A9 9 0 0 0 21 12M20.31 8.56a9 9 0 0 0-1.95-2.92M15.44 3.69A9 9 0 0 0 12 3" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
