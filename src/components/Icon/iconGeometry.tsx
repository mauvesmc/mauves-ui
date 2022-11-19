import { Component, ComponentProps } from "solid-js";

export const IconGeometry: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m7 21 4-12m2 0 1.48 4.439m.949 2.847L17 21" />
    <circle cx="12" cy="7" r="2" />
    <path d="M4 12c1.526 2.955 4.588 5 8 5 3.41 0 6.473-2.048 8-5M12 5V3" />
  </svg>
);
