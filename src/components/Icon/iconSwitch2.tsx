import { Component, ComponentProps } from "solid-js";

export const IconSwitch2: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M3 17h5l1.67-2.386m3.66-5.227L15 7h6" />
    <path d="m18 4 3 3-3 3M3 7h5l7 10h6" />
    <path d="m18 20 3-3-3-3" />
  </svg>
);
