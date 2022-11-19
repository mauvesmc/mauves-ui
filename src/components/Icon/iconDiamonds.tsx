import { Component, ComponentProps } from "solid-js";

export const IconDiamonds: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="m10.831 20.413-5.375-6.91c-.608-.783-.608-2.223 0-3.005l5.375-6.911a1.457 1.457 0 0 1 2.338 0l5.375 6.91c.608.783.608 2.223 0 3.005l-5.375 6.911a1.457 1.457 0 0 1-2.338 0z" />
  </svg>
);
