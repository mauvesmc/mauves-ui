import { Component, ComponentProps } from "solid-js";

export const IconNoCopyright: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M14 9.75a3.016 3.016 0 0 0-4.163.173 2.993 2.993 0 0 0 0 4.154A3.016 3.016 0 0 0 14 14.25M6 6l1.5 1.5M16.5 16.5 18 18" />
  </svg>
);
