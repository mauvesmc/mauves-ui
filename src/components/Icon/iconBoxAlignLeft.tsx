import { Component, ComponentProps } from "solid-js";

export const IconBoxAlignLeft: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9.752 19.753v-16h-5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5zM14.752 19.753h-.01M19.753 19.753h-.011M19.753 14.752h-.011M19.753 8.752h-.011M19.753 3.752h-.011M14.752 3.752h-.01" />
  </svg>
);
