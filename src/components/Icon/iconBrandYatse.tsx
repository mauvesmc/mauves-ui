import { Component, ComponentProps } from "solid-js";

export const IconBrandYatse: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M7.002 3 12 5.876v5.088l4.197-2.73L21 10.965l-9.281 5.478-2.383 1.41-2.334 1.377L4 21v-5.565l3.002-1.771z" />
  </svg>
);
