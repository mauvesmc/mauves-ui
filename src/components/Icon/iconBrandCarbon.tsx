import { Component, ComponentProps } from "solid-js";

export const IconBrandCarbon: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M14 10v-.2A1.8 1.8 0 0 0 12.2 8h-.4A1.8 1.8 0 0 0 10 9.8v4.4a1.8 1.8 0 0 0 1.8 1.8h.4a1.8 1.8 0 0 0 1.8-1.8V14" />
    <rect width="18" height="18" x="3" y="3" rx="3" />
  </svg>
);
