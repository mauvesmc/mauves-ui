import { Component, ComponentProps } from "solid-js";

export const IconRazorElectric: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M8 3v2M12 3v2M16 3v2M9 12v6a3 3 0 0 0 6 0v-6H9zM8 5h8l-1 4H9zM12 17v1" />
  </svg>
);
