import { Component, ComponentProps } from "solid-js";

export const IconRadar2: Component<ComponentProps<"svg">> = (props) => (
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
    <circle cx="12" cy="12" r="1" />
    <path d="M15.51 15.56A5 5 0 1 0 12 17" />
    <path d="M18.832 17.86A9 9 0 1 0 12 21M12 12v9" />
  </svg>
);
