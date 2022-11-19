import { Component, ComponentProps } from "solid-js";

export const IconAnkh: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M6 13h12M12 21v-8l-.422-.211A6.472 6.472 0 0 1 8 7a4 4 0 1 1 8 0 6.472 6.472 0 0 1-3.578 5.789L12 13" />
  </svg>
);
