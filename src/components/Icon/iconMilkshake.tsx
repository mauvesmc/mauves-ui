import { Component, ComponentProps } from "solid-js";

export const IconMilkshake: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17 10a5 5 0 0 0-10 0" />
    <rect width="12" height="3" x="6" y="10" rx="1" />
    <path d="m7 13 1.81 7.243a1 1 0 0 0 .97.757h4.44a1 1 0 0 0 .97-.757L17 13M12 5V3" />
  </svg>
);
