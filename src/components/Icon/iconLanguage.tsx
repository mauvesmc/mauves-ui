import { Component, ComponentProps } from "solid-js";

export const IconLanguage: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M4 5h7M9 3v2c0 4.418-2.239 8-5 8" />
    <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4M12 20l4-9 4 9M19.1 18h-6.2" />
  </svg>
);
