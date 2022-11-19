import { Component, ComponentProps } from "solid-js";

export const IconMicrophone: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="6" height="11" x="9" y="2" rx="3" />
    <path d="M5 10a7 7 0 0 0 14 0M8 21h8M12 17v4" />
  </svg>
);
