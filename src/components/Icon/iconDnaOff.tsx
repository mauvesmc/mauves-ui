import { Component, ComponentProps } from "solid-js";

export const IconDnaOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M16 12a3.898 3.898 0 0 0-1.172-2.828A4.027 4.027 0 0 0 12 8M9.172 9.172a4 4 0 1 0 5.656 5.656" />
    <path d="M9.172 20.485a4 4 0 1 0-5.657-5.657M14.828 3.515a4 4 0 1 0 5.657 5.657M3 3l18 18" />
  </svg>
);
