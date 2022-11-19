import { Component, ComponentProps } from "solid-js";

export const IconRollerSkating: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M5.905 5h3.418a1 1 0 0 1 .928.629l1.143 2.856a3 3 0 0 0 2.207 1.83l4.717.926A2.084 2.084 0 0 1 20 13.286V14a1 1 0 0 1-1 1H5.105a1 1 0 0 1-.995-1.1l.8-8a1 1 0 0 1 .995-.9z" />
    <circle cx="8" cy="17" r="2" />
    <circle cx="16" cy="17" r="2" />
  </svg>
);
