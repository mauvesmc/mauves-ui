import { Component, ComponentProps } from "solid-js";

export const IconEgg: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M19 14.083c0 4.154-2.966 6.74-7 6.917-4.2.006-7-2.763-7-6.917C5 8.545 8.5 2.993 12 3c3.5.007 7 5.545 7 11.083z" />
  </svg>
);
