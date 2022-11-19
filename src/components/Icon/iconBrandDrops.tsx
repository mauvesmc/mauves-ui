import { Component, ComponentProps } from "solid-js";

export const IconBrandDrops: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M17.637 7.416a7.907 7.907 0 0 1 1.76 8.666A8 8 0 0 1 12 21a8 8 0 0 1-7.396-4.918 7.907 7.907 0 0 1 1.759-8.666L12 2l5.637 5.416z" />
    <path d="M14.466 10.923a3.595 3.595 0 0 1 .77 3.877A3.5 3.5 0 0 1 12 17a3.5 3.5 0 0 1-3.236-2.2 3.595 3.595 0 0 1 .77-3.877L12 8.5l2.466 2.423z" />
  </svg>
);
