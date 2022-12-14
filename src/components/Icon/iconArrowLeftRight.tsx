import { Component, ComponentProps } from "solid-js";

export const IconArrowLeftRight: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m17 13 4-4-4-4M7 13 3 9l4-4" />
    <path d="M12 14a5 5 0 0 1 5-5h4M12 19v-5a5 5 0 0 0-5-5H3" />
  </svg>
);
