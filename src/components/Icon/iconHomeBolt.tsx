import { Component, ComponentProps } from "solid-js";

export const IconHomeBolt: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m19 10-7-7-9 9h2v7a2 2 0 0 0 2 2h7.5" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2c.661 0 1.248.32 1.612.815M19 14l-2 4h4l-2 4" />
  </svg>
);
