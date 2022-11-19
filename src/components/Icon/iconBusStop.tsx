import { Component, ComponentProps } from "solid-js";

export const IconBusStop: Component<ComponentProps<"svg">> = (props) => (
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
    <rect width="4" height="6" x="3" y="3" rx="1" />
    <circle cx="18" cy="17" r="2" />
    <path d="M10 5h7c2.761 0 5 3.134 5 7v5h-2M16 17H8" />
    <path d="m16 5 1.5 7H22M9.5 10H17M12 5v5M5 9v11" />
  </svg>
);
