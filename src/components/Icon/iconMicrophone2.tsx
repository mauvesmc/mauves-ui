import { Component, ComponentProps } from "solid-js";

export const IconMicrophone2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M15.002 12.9A5 5 0 1 0 11.1 9M15.002 12.9 11.1 9.001l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588-7.515z" />
  </svg>
);
