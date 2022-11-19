import { Component, ComponentProps } from "solid-js";

export const IconHandGrab: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 11V7.5a1.5 1.5 0 0 1 3 0V10M11 9.5v-3a1.5 1.5 0 0 1 3 0V10M14 7.5a1.5 1.5 0 0 1 3 0V10" />
    <path d="M17 9.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7L7 17c-.312-.479-1.407-2.388-3.286-5.728A1.5 1.5 0 0 1 4.25 9.25a1.867 1.867 0 0 1 2.28.28L8 11" />
  </svg>
);
