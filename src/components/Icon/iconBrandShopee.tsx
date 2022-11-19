import { Component, ComponentProps } from "solid-js";

export const IconBrandShopee: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m4 7 .867 12.143A2 2 0 0 0 6.862 21h10.276a2 2 0 0 0 1.995-1.857L20 7H4zM8.5 7c0-1.653 1.5-4 3.5-4s3.5 2.347 3.5 4" />
    <path d="M9.5 17c.413.462 1 1 2.5 1s2.5-.897 2.5-2-1-1.5-2.5-2-2-1.47-2-2c0-1.104 1-2 2-2s1.5 0 2.5 1" />
  </svg>
);
