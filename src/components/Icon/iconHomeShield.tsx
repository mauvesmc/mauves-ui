import { Component, ComponentProps } from "solid-js";

export const IconHomeShield: Component<ComponentProps<"svg">> = (props) => (
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
    <path d="M9 21v-6a2 2 0 0 1 2-2h1.341" />
    <path d="M19.682 10.682 12 3l-9 9h2v7a2 2 0 0 0 2 2h5" />
    <path d="M22 16c0 4-2.5 6-3.5 6S15 20 15 16c1 0 2.5-.5 3.5-1.5 1 1 2.5 1.5 3.5 1.5z" />
  </svg>
);
