import { Component, ComponentProps } from "solid-js";

export const IconBathOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 12h4a1 1 0 0 1 1 1v3c0 .311-.036.614-.103.904m-1.61 2.378A3.982 3.982 0 0 1 17 20H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1h8M6 12V6m1.178-2.824C7.43 3.063 7.708 3 8 3h3v2.25M4 21l1-1.5M20 21l-1-1.5M3 3l18 18" />
  </svg>
);
