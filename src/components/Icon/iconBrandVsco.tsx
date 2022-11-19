import { Component, ComponentProps } from "solid-js";

export const IconBrandVsco: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    <path d="M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0zM12 3v4M21 12h-4M12 21v-4M3 12h4M18.364 5.636l-2.828 2.828M18.364 18.364l-2.828-2.828M5.636 18.364l2.828-2.828M5.636 5.636l2.828 2.828" />
  </svg>
);
