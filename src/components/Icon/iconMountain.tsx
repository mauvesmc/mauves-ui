import { Component, ComponentProps } from "solid-js";

export const IconMountain: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 20h18L14.079 5.388a2.3 2.3 0 0 0-4.158 0L3 20z" />
    <path d="m7.5 11 2 2.5L12 11l2 3 2.5-2" />
  </svg>
);
