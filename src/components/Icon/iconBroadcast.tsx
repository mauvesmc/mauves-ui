import { Component, ComponentProps } from "solid-js";

export const IconBroadcast: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M18.364 19.364a9 9 0 1 0-12.728 0" />
    <path d="M15.536 16.536a5 5 0 1 0-7.072 0" />
    <circle cx="12" cy="13" r="1" />
  </svg>
);
