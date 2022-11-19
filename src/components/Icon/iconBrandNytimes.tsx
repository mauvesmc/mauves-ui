import { Component, ComponentProps } from "solid-js";

export const IconBrandNytimes: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M11.036 5.058a8.001 8.001 0 1 0 8.706 9.965" />
    <path d="M12 21V10l-7.5 4M17.5 3a2.5 2.5 0 1 1 0 5l-11-5a2.5 2.5 0 0 0-.67 4.91M9 12v8M16 13h-.01" />
  </svg>
);
