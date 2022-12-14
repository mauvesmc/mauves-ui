import { Component, ComponentProps } from "solid-js";

export const IconBus: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="6" cy="17" r="2" />
    <circle cx="18" cy="17" r="2" />
    <path d="M4 17H2V6a1 1 0 0 1 1-1h14a5 7 0 0 1 5 7v5h-2m-4 0H8" />
    <path d="m16 5 1.5 7H22M2 10h15M7 5v5M12 5v5" />
  </svg>
);
