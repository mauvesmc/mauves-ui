import { Component, ComponentProps } from "solid-js";

export const IconThumbUpOff: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3a3.987 3.987 0 0 0 2.828-1.172M11 7V6a2 2 0 1 1 4 0v5h3a2 2 0 0 1 2 2c-.222 1.112-.39 1.947-.5 2.503m-.758 3.244C18.35 19.57 17.698 20.059 17 20h-7a3 3 0 0 1-3-3M3 3l18 18" />
  </svg>
);
