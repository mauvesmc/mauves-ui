import { Component, ComponentProps } from "solid-js";

export const IconBrandDeliveroo: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m15 11 1-9 5 .5L20 16l-3 6-12.5-2.5-1.5-6 7-1.5-1.5-7.5 4.5-1z" />
    <circle cx="15.5" cy="15.5" r="1" fill="currentColor" />
    <circle cx="11.5" cy="14.5" r="1" fill="currentColor" />
  </svg>
);
