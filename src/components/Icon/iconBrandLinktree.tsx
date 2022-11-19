import { Component, ComponentProps } from "solid-js";

export const IconBrandLinktree: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 3 2 15h3v5h5v-5H8l4-7zM15 3l7 12h-3v5h-5v-5h2l-4-7z" />
  </svg>
);
