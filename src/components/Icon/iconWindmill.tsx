import { Component, ComponentProps } from "solid-js";

export const IconWindmill: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3v9zM12 12c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5h-9zM12 12c-2.76 0-5 2.01-5 4.5S9.24 21 12 21v-9zM12 12c0-2.76-2.01-5-4.5-5S3 9.24 3 12h9z" />
  </svg>
);
