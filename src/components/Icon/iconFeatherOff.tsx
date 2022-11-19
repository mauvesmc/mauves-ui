import { Component, ComponentProps } from "solid-js";

export const IconFeatherOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m4 20 8-8M14 5v5h5M9 11v4h4M6 13v5h5M6 13l3.502-3.502m2.023-2.023L14 5" />
    <path d="M19 10c.638-.636 1-1.515 1-2.486A3.515 3.515 0 0 0 16.483 4c-.97 0-1.847.367-2.483 1M11 18l3.499-3.499m2.008-2.008L19 10M3 3l18 18" />
  </svg>
);
