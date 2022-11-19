import { Component, ComponentProps } from "solid-js";

export const IconHomeShare: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 21v-6a2 2 0 0 1 2-2h2c.247 0 .484.045.702.127" />
    <path d="M19 12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5M16 22l5-5M21 21.5V17h-4.5" />
  </svg>
);
